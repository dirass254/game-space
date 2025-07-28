import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  let color = score > 70 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <>
      <Badge
        colorPalette={color}
        fontSize={"14px"}
        padding={1}
        borderRadius={"4px"}
      >
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
