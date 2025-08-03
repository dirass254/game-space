import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "./Hooks/useGames";
import PlatformIconList from "./Components/PlatformIconList";
import CriticScore from "./Components/CriticScore";
import CropedImageUrl from "./services/Image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const imageUrl = CropedImageUrl(game.background_image);
  return (
    <Card.Root>
      <Image src={CropedImageUrl(game.background_image)} />

      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack marginTop={2} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
