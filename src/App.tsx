import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/navBar";
import GameGrid from "./Components/GameGrid";
import GenresCard from "./Components/GenresCard";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="aside" display={{ base: "none", lg: "block" }}>
          <GenresCard />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
