import type { GetStaticProps, NextPage } from "next";
import { client } from "libs/client";
import { Blog, Category } from "types/blogs";
import {
  Link,
} from "@chakra-ui/react";
import MainLayouts from "components/layouts/MainLayouts";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const Home: NextPage<Props> = ({ blogs, categories }: Props) => {
  return (
    <MainLayouts categories={categories}>
      {blogs.map((blog) => (
        <Link href={`blog/${blog.id}`} key={blog.id}>
          {blog.title}
        </Link>
      ))}
    </MainLayouts>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blogs" });
  const categories = await client.get({ endpoint: "categories" });
  return {
    props: {
      blogs: blogs.contents,
      categories: categories.contents,
    },
  };
};

export default Home;
