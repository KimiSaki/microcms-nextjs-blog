import { Box, Heading, Text, Link, Image, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState, MouseEventHandler } from "react";
import { Blog } from "types/blogs";

type Props = {
  blog: Blog;
};

const BlogCard: FC<Props> = ({ blog }: Props) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
    setHover(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    setHover(false);
  };
  const handleMouseClick: MouseEventHandler<HTMLDivElement> = (e) => {
    router.push(`blog/${blog.id}`);
  };

  return (
    <Box
      cursor={hover ? "pointer" : "default"}
      boxShadow={hover ? "md" : "none"}
      width="400px"
      height="350px"
      p={3}
      m={5}
      borderRadius={5}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      <Box width="100%" height="220px">
        <Image src={blog.eyecatch?.url} alt="eyecatch image" />
      </Box>
      <Box height="60px">
        <Heading color="black" fontSize={"md"} my={3}>
          {blog.title}
        </Heading>
      </Box>
      <Box>
        <Text fontSize={"sm"} color="gray.500">
          {blog.publishedAt}
        </Text>
      </Box>
    </Box>
  );
};
export default BlogCard;
