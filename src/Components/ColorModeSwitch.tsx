import React, { useState, useEffect } from "react";
import { HStack, Box, Text } from "@chakra-ui/react";

function ColorModeSwitch() {
  const [isDark, setIsDark] = useState(false);

  // Check initial theme on component mount
  useEffect(() => {
    const currentMode = document.documentElement.getAttribute("data-theme");
    setIsDark(currentMode === "dark");
  }, []);

  const toggleColorMode = () => {
    const newMode = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newMode);
    setIsDark(!isDark);
  };

  return (
    <HStack>
      <Box
        as="button"
        onClick={toggleColorMode}
        w="44px"
        h="24px"
        borderRadius="12px"
        bg={isDark ? "blue.400" : "gray.300"}
        position="relative"
        transition="background-color 0.2s"
        border="none"
        cursor="pointer"
      >
        <Box
          w="20px"
          h="20px"
          borderRadius="50%"
          bg="white"
          position="absolute"
          top="2px"
          left={isDark ? "22px" : "2px"}
          transition="left 0.2s"
        />
      </Box>
      <Text textWrap={"nowrap"}>🌙/☀️</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
