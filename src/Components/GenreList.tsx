import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import CropedImageUrl from "../services/Image-url";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}
function GenresList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <List.Root listStyleType={"none"}>
        {data.map((g) => (
          <List.Item paddingY={"5px"} key={g.id}>
            <HStack>
              <Image
                src={CropedImageUrl(g.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontSize="lg"
                variant="ghost"
                onClick={() => onSelectGenre(g)}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {g.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenresList;
