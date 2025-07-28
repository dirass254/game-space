import { CardBody, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <CardRoot width={"300px"} overflow={"hidden"} borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
}

export default GameCardSkeleton;
