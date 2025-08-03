import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <HStack>
        <Image src="/vite.svg" alt="Logo" boxSize="50px" />
        <SearchInput />
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
}

export default NavBar;
