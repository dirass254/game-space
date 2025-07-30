import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import CropedImageUrl from "../services/Image-url";

function GenresList() {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading genres</Text>;
  return (
    <>
      <List.Root listStyleType={"none"}>
        {data.map((g) => (
          <List.Item paddingY={"5px"} key={g.id}>
            <HStack>
              <Image
                src={CropedImageUrl(g.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenresList;
