import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { Blog, Category } from "types/blogs";
import { client } from "libs/client";
import MainLayouts from "components/layouts/MainLayouts";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const categories = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data,
      categories: categories.contents,
    },
  };
};

type Props = {
  blog: Blog;
  categories: Category[];
};

const BlogId: NextPage<Props> = ({ blog, categories }: Props) => {
  return (
    <MainLayouts categories={categories}>
      <Box mb={5}>
        <Heading>{blog.title}</Heading>
      </Box>
      <Box mb={5}>
        <Flex>
          <Box>
            <Text fontWeight="md" color="gray">{blog.publishedAt}</Text>
          </Box>
        </Flex>
      </Box>
      <Box padding={5}>
        <div dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
      </Box>
    </MainLayouts>
  );
};

export default BlogId;
