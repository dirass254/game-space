import { HStack, Image, Text, Button } from "@chakra-ui/react";

function NavBar() {
  const toggleColorMode = () => {
    const currentMode = document.documentElement.getAttribute("data-theme");
    const newMode = currentMode === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newMode);
  };

  return (
    <HStack padding="20px" justifyContent="space-between">
      <HStack>
        <Image src="/vite.svg" alt="Logo" boxSize="50px" />
        <Text>GameSpace</Text>
      </HStack>
      <Button onClick={toggleColorMode}>🌙/☀️</Button>
    </HStack>
  );
}

export default NavBar;
