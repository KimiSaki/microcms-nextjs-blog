import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { Blog, Category } from "types/blogs";
import { client } from "libs/client";
import MainLayouts from "components/layouts/MainLayouts";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;
  const contentId = id instanceof Array ? id[0] : id;
  const data = await client.get({ endpoint: "blogs", contentId: contentId });
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
      <Box>
        <Box p={5}>
          <Box mb={5}>
            <Heading>{blog.title}</Heading>
          </Box>
          <Box mb={5}>
            <Flex alignContent="center">
              <BiTime color="gray" />
              <Text fontWeight="md" color="gray">{blog.publishedAt}</Text>
            </Flex>
          </Box>
        </Box>
        <Divider />
        <Box padding={5}>
          <div dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
        </Box>
      </Box>
    </MainLayouts>
  );
};

export default BlogId;
