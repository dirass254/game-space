import { Input, Box } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <Box position="relative" width="300px">
      <Box
        position="absolute"
        left="12px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        pointerEvents="none"
      >
        <BsSearch color="gray.300" />
      </Box>
      <Input
        size="lg"
        borderRadius={20}
        placeholder="Searching games..."
        variant="outline"
        paddingLeft="40px"
      />
    </Box>
  );
};

export default SearchInput;
