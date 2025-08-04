import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="20px" justifyContent="space-between">
      <HStack>
        <Image src="/vite.svg" alt="Logo" boxSize="50px" />
        <SearchInput onSearch={onSearch} />
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
}

export default NavBar;
