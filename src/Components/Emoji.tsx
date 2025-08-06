import { Text, TextProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: TextProps } = {
    3: { children: "😑", boxSize: "25px" },
    4: { children: "👍", boxSize: "25px" },
    5: { children: "🎯", boxSize: "35px" },
  };
  return <Text {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
