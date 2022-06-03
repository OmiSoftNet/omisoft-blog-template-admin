import { Post as PostType } from "../../types/post";

export interface initialValuesI {
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
}

export interface initialValuesEditI {
  _id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDesctiption: string;
  url: string;
  similarArticles: [] | string[];
  status: string;
  topic: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const initialValues = (): initialValuesI => ({
  imageUrl: "",
  imageAlt: "",
  title: "",
  shortDescription: "",
  seoTitle: "",
  seoDesctiption: "",
  url: "",
  similarArticles: [],
  status: "",
  topic: "",
  tags: [],
});

export const initialValuesEdit = (
  post: PostType | null
): initialValuesEditI => ({
  _id: post?._id ?? "",
  imageUrl: post?.imageUrl ?? "",
  imageAlt: post?.imageAlt ?? "",
  title: post?.title ?? "",
  shortDescription: post?.shortDescription ?? "",
  seoTitle: post?.seoTitle ?? "",
  seoDesctiption: post?.seoDesctiption ?? "",
  url: post?.url ?? "",
  similarArticles: post?.similarArticles.map((item) => item._id) ?? [],
  status: post?.status ?? "",
  topic: post?.topic ?? "",
  tags: post?.tags ?? [],
  createdAt: post?.createdAt ?? "",
  updatedAt: post?.updatedAt ?? "",
});
