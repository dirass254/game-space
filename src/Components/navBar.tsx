import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <HStack>
        <Image src="/vite.svg" alt="Logo" boxSize="50px" />
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
}

export default NavBar;
