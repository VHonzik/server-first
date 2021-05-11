import { Box, Container, Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { useState } from "react";
import DungeonRun from "../server-first/DungeonRun";
import Guild from "../server-first/Guild";

function dungeonRunsToElements(runs: DungeonRun[], text: string) {
  return runs.map(dungeonRun => (
    <ListItem key={dungeonRun.startTime.toString()}>
      <ListItemText>
        {dungeonRun.dungeon.longName} - {text} {dungeonRun.endTime.toUTCString()}
      </ListItemText>
    </ListItem>
  ));
}

export default function Runs() {
  const [finishedRuns, setFinishedRuns] = useState(dungeonRunsToElements(Guild.finishedRuns, 'finished'));
  const [ongoingRuns, setOngoingRuns] = useState(dungeonRunsToElements(Guild.ongoingRuns, 'ends'));

  Guild.onDungeonRunsChanged.subscribe(() => {
    setFinishedRuns(dungeonRunsToElements(Guild.finishedRuns, 'finished'));
    setOngoingRuns(dungeonRunsToElements(Guild.ongoingRuns, 'ends'));
  });

  return (
    <Box>
      <Typography variant="h1" component="h2" gutterBottom>Runs</Typography>
      <Container>
        <Box display='flex' justifyContent='center'>
        <List>
          {finishedRuns}
        </List>
        <Divider />
        <List>
          {ongoingRuns}
        </List>
        </Box>
      </Container>
    </Box>
  );
}