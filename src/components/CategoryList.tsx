import { FC, MouseEvent } from "react";
import {
  Box,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Category } from "types/blogs";

type Props = {
  categories: Category[];
  handleClickCategory: (categoryid: string) => void;
};

const CategoryList: FC<Props> = ({ categories, handleClickCategory }) => {
  return (
    <Box bgColor="white" boxShadow="md" borderRadius={5} padding={5}>
      <Box mb={3}>
        <Text fontWeight="semibold">カテゴリ</Text>
      </Box>
      <Divider />
      <Box mt={3}>
        {categories.map((category) => (
          <Button
            size="xs"
            mb={2}
            key={category.name}
            onClick={() => handleClickCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default CategoryList;
