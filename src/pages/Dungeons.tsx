import { Box, Container, List, Typography } from "@material-ui/core";
import { NormalDungeons } from "../server-first/content/Dungeons";
import DungeonListItem from "../components/Dungeons/DungeonListItem";

export default function Dungeons() {
  const dungeons = NormalDungeons.map(dungeon => (
  <DungeonListItem dungeon={dungeon} />
  ));

  return (
    <Box>
      <Typography variant="h1" component="h2" gutterBottom>Dungeons</Typography>
      <Container>
        <Box display='flex' justifyContent='center'>
        <List>
          {dungeons}
        </List>
        </Box>
      </Container>
    </Box>
  );
}