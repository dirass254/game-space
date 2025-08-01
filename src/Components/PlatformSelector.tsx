import { Button, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import usePlatforms from "../Hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("Platforms");

  if (error) return null;
  return (
    <Box position="relative">
      <Button bg={"gray.500"} onClick={() => setIsOpen(!isOpen)}>
        {selectedPlatform}
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
          {data.map((platform) => (
            <Text
              key={platform.id}
              p={2}
              cursor="pointer"
              _hover={{ bg: "gray.500" }}
              onClick={() => {
                setSelectedPlatform(platform.name);
                setIsOpen(false);
              }}
            >
              {platform.name}
            </Text>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default PlatformSelector;
