import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { client } from "libs/client";
import { Blog, Category } from "types/blogs";
import MainLayouts from "components/layouts/MainLayouts";
import BlogCard from "components/BlogCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const Home: NextPage<Props> = ({ blogs, categories }: Props) => {
  return (
    <MainLayouts categories={categories}>
      <Flex justifyContent="center">
        {!blogs.length && <p>There are no blog Post...</p>}
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Flex>
    </MainLayouts>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryid } = context.query;
  const endpoint = { endpoint: "blogs" };
  const filter = { queries: { filters: `category[equals]${categoryid}` } };
  console.log(categoryid);
  console.log({...endpoint, ...filter});

  const blogs = await client.get(categoryid === undefined ? endpoint : {...endpoint, ...filter});
  console.log(blogs);
  const categories = await client.get({ endpoint: "categories" });
  return {
    props: {
      blogs: blogs.contents,
      categories: categories.contents,
    },
  };
};

export default Home;
