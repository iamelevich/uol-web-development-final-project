import Image from 'next/image';
import Link from 'next/link';

export default function PhotosSeachResult({ data }: { data: any }) {
  return (
    <div className="flex flex-wrap mt-4">
      <p className="text-slate-400 text-center mb-4">
        Totaly found {data.total} images. But show there maximum 10. To get more
        - visit{' '}
        <a
          href="https://unsplash.com"
          target="_blank"
          className="gradient-link"
          rel="noreferrer"
        >
          unsplash.com
        </a>
      </p>
      {data.results.map((imageInfo, i) => {
        return (
          <div key={imageInfo.id} className="group relative mb-3">
            <Link href={imageInfo.links.html}>
              <a target="_blank">
                <Image
                  src={imageInfo.urls.regular}
                  width={imageInfo.width}
                  height={imageInfo.height}
                  blurDataURL={imageInfo.blur_hash}
                  alt={imageInfo.alt_description}
                  className="group-hover:shadow-inner group-hover:opacity-75"
                />
              </a>
            </Link>
            <div className="absolute top-0 right-0 text-white p-3 bg-black opacity-75 invisible group-hover:visible">
              by{' '}
              <Link href={imageInfo.user.links.html}>
                <a className="gradient-link" target="_blank">
                  {imageInfo.user.name}
                </a>
              </Link>
            </div>
            {imageInfo.description ? (
              <p className="text-white text-center absolute bottom-1.5 left-0 p-3 m-0 w-full bg-black opacity-75 invisible group-hover:visible">
                {imageInfo.description}
              </p>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
}
