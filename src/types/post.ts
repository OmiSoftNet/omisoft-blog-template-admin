export type Post = {
  _id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  similarArticles: [] | Post[];
  status: string;
  topic: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export interface UrlInfo {
  _id: string;
  url: string;
  title: string;
}

export type PostEditQuery = {
  _id: string;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  shortDescription?: string;
  seoTitle?: string;
  seoDesctiption?: string;
  url?: string;
  similarArticles?: [] | string[];
  status?: string;
  topic?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type PostEdit = {
  _id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  similarArticles: string[];
  status: string;
  topic: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export interface IPostsListQueryData {
  limit?: number;
  page?: number;
  id?: string;
}
export type GetPostQuery = {
  limit?: number;
  page?: number;
  status?: string;
};

export type CreatePostQuery = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  similarArticles: string[];
  status: string;
  topic: string;
  tags: string[];
};
