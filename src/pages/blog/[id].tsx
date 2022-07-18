import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { Blog } from "types/blogs";
import { client } from "libs/client";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }: Props) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
    </main>
  );
};

export default BlogId;
