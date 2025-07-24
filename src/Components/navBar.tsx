import { HStack, Image, Text } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack padding="20px">
      <Image src="/vite.svg" alt="Logo" boxSize="50px" border="2px solid red" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
