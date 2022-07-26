import { NextPage } from "next";
import Header from "components/layouts/Header";
import {
  Box,
  Flex,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { MouseEvent, ReactNode } from "react";
import { Category } from "types/blogs";
import CategoryList from "components/CategoryList";
import { useRouter } from "next/router";

type Props = {
  categories: Array<Category>;
  children: ReactNode;
}

const MainLayouts: NextPage<Props> = ({ categories, children }: Props) => {
  const router = useRouter();
  const handleClickCategory = (categoryid: string) => {
    router.push({
      pathname: "/",
      query: { categoryid: categoryid},
    });
  }
  return (
    <Box>
      <Header />
      <Box pt={20} minH="100vh" bgColor="sub">
        <Flex>
          <Flex width="80%" minH="80vh" justifyContent={"center"}>
            <Box
              ml={10}
              mr={5}
              mb={10}
              width="container.xl"
              bgColor="white"
              borderRadius={5}
              boxShadow="md"
              padding={5}
            >
              {children}
            </Box>
          </Flex>

          <Box ml={5} mr={10} width="20%">
            <CategoryList categories={categories} handleClickCategory={handleClickCategory} />

            <Box mt={5}>
              <Flex>
                <Spacer />
                <Box mx={5} >
                  <Link href="https://twitter.com/kimi5aki">
                    <Image
                      src="/Twitter social icons - circle - blue.png"
                      alt="twitter link"
                      boxSize="40px"
                    />
                  </Link>
                </Box>
                <Box mx={5} >
                  <Link href="https://github.com/KimiSaki?tab=repositories">
                    <Image
                      src="/GitHub-Mark-120px-plus.png"
                      alt="github link"
                      boxSize="40px"
                    />
                  </Link>
                </Box>
                <Spacer />
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
export default MainLayouts;
