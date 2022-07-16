import type { InferGetStaticPropsType, NextPage } from "next";
import styles from "styles/Home.module.css";
import { client } from "libs/client";
import { Blog, Category } from "types/blogs";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  categories,
}: Props) => {
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
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
