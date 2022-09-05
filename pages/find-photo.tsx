import { useQuery } from 'react-query';
import React from 'react';
import useDebounce from '../lib/useDebounce';
import Head from 'next/head';
import Layout from '../components/layout';
import PhotosSeachResult from '../components/photosSearchResult';

export default function PhotosPage() {
  const [searchValue, setSearchValue] = React.useState('');
  const debounedSearchValue = useDebounce(searchValue, 500);

  const { isLoading, isError, error, isSuccess, data } = useQuery(
    ['searchPhotos', debounedSearchValue],
    async () => {
      return fetch(
        `https://api.unsplash.com/search/photos?query=${debounedSearchValue}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_TOKEN}`
      ).then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            console.error(data);
            throw new Error((data.errors || []).join(' \n'));
          });
        }
        return res.json();
      });
    },
    {
      enabled: debounedSearchValue.length >= 3,
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="motion-safe:animate-spin h-20 fill-slate-400 mx-auto"
        >
          <path d="M258.9 412.3c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5zM252.8 312c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6s.4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4zm184.8 72c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C300.4 32.7 266.8 0 224 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C-10.3 165.1 1 210.8 34 256C1 301.2-10.3 346.9 10.4 384c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2c31.8-1.4 38.6 8.7 40.2 11.7zM224 64c3.9 0 18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5C205.9 65.9 220.1 64 224 64zM106.5 147.5c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C59.4 177 64 163.3 66.3 159.1c1.6-2.9 8.4-13 40.2-11.7zM66.3 352.9c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM224 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
        </svg>
      );
    }

    if (isError) {
      return (
        <div className="text-center bg-pink-300 p-5 rounded-lg text-slate-700">
          Something went wrong: {(error as Error).message}
        </div>
      );
    }

    if (isSuccess) {
      return <PhotosSeachResult data={data} />;
    }

    return <div className="h-20"></div>;
  };

  return (
    <Layout>
      <Head>
        <title>Find free photo</title>
      </Head>
      <section>
        <h1 className="text-center pb-1 text-xl font-extrabold leading-tight md:text-2xl">
          Search for photos with{' '}
          <a
            className="gradient-link text-slate-500"
            href="https://unsplash.com"
          >
            Unsplash
          </a>
        </h1>
        <input
          type="text"
          className="invalid:text-pink-600 peer mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
          placeholder="Type to search (min 3 symbols)"
          minLength={3}
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
        />
        <p className="invisible peer-invalid:visible text-pink-600 text-sm">
          Should contain at least 3 symbols
        </p>
      </section>
      <section>{renderResult()}</section>
    </Layout>
  );
}
