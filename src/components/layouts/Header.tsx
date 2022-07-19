import { NextPage } from "next";
import { Box, Link, Text } from "@chakra-ui/react";

const Header: NextPage = () => {
  return (
    <Box position="absolute" top={0} width="100%" height={10} bgColor="main">
      <Link href="/">
        <Box ml={10}>
          <Text color="white" fontSize="2xl" >ufoambulate</Text>
        </Box>
      </Link>
    </Box>
  );
}
export default Header;
