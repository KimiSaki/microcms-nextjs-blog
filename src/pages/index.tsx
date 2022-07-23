import type { GetStaticProps, NextPage } from "next";
import { client } from "libs/client";
import { Blog, Category } from "types/blogs";
import MainLayouts from "components/layouts/MainLayouts";
import BlogCard from "components/BlogCard";
import { Flex } from "@chakra-ui/react";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const Home: NextPage<Props> = ({ blogs, categories }: Props) => {
  return (
    <MainLayouts categories={categories}>
      <Flex justifyContent="center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Flex>
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
