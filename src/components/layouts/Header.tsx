import { NextPage } from "next";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { GiUfo } from "react-icons/gi";

const Header: NextPage = () => {
  return (
    <Box position="absolute" top={0} width="100%" height={10} bgColor="main">
      <Link href="/">
        <Flex ml={10}>
          <Box my={2} mr={1}>
            <GiUfo color="white" size="1.5rem" />
          </Box>
          <Text color="white" fontSize="2xl" >ufoambulate</Text>
        </Flex>
      </Link>
    </Box>
  );
}
export default Header;
