export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: Image;
  category: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};
