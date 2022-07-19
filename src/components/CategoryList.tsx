import { FC } from "react";
import {
  Box,
  Text,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Category } from "types/blogs";

type Props = {
  categories: Category[];
}

const CategoryList: FC<Props> = ({categories}) => {
  return (
    <Box
    bgColor="white"
    boxShadow="md"
    borderRadius={5}
    padding={5}
  >
    <Box mb={3}>
      <Text fontWeight="semibold">カテゴリ</Text>
    </Box>
    <Divider />
    <Box mt={3}>
      <UnorderedList>
        {categories.map((category) => (
          <ListItem key={category.name}>{category.name}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  </Box>
  );
}
export default CategoryList;
