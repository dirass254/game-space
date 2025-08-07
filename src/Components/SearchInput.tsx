import { Input, Box, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      onSearch(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Box position="relative" width="300px">
        <Box
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          zIndex={1}
          cursor="pointer"
          _hover={{ color: "gray.500" }}
        >
          <Icon as={BsSearch as any} color="gray.300" onClick={handleSearch} />
        </Box>
        <Input
          ref={ref}
          size="lg"
          borderRadius={20}
          placeholder="Searching games..."
          variant="outline"
          paddingLeft="40px"
        />
      </Box>
    </form>
  );
};

export default SearchInput;
