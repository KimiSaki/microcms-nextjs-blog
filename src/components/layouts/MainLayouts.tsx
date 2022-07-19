import { NextPage } from "next";
import Header from "components/layouts/Header";
import {
  Box,
  Flex,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Category } from "types/blogs";
import CategoryList from "components/CategoryList";

type Props = {
  categories: Array<Category>;
  children: ReactNode;
}

const MainLayouts: NextPage<Props> = ({ categories, children }: Props) => {
  return (
    <Box>
      <Header />
      <Box pt={20} minH="100vh" bgColor="sub">
        <Flex>
          <Box
            ml={10}
            mr={5}
            mb={10}
            width="80%"
            minH="80vh"
            bgColor="white"
            borderRadius={5}
            boxShadow="md"
            padding={5}
          >
            {children}
          </Box>

          <Box ml={5} mr={10} width="20%">
            <CategoryList categories={categories} />

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
