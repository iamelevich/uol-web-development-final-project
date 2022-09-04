export type PostMeta = {
  date: string;
  title: string;
  authorName: string;
  authorLink: string;
  source: string;
  sourceName: string;
  image: string;
};

export type PostData = PostMeta & {
  id: string;
  contentHtml: string;
};

export type PostList = PostListItem[];
