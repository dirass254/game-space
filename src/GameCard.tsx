import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "./Hooks/useGames";
import PlatformIconLit from "./Components/PlatformIconList";
import PlatformIconList from "./Components/PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
