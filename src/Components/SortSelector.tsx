import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectSort: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Box position="relative">
      <Button bg={"gray.500"} onClick={() => setIsOpen(!isOpen)}>
        Sort by: {currentSortOrder ? currentSortOrder?.label : "Relevance"}
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          bg="gray.800"
          border="1px solid gray"
          borderRadius="md"
          boxShadow="md"
          zIndex={1000}
          minW="300px"
        >
          {sortOrders.map((order) => (
            <Text
              onClick={() => {
                onSelectSort(order.value);
                setIsOpen(false);
              }}
              key={order.value}
              cursor="pointer"
              p={2}
              _hover={{ bg: "gray.500" }}
            >
              {order.label}
            </Text>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SortSelector;
