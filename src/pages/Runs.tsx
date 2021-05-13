import { Box, Container, Divider, List, Typography } from "@material-ui/core";
import { useState } from "react";
import DungeonRunListItem from "../components/Dungeons/DungeonRunListItem";
import FinishedDungeonRunListItem from "../components/Dungeons/FinishedDungeonRunListItem";
import DungeonRun from "../server-first/DungeonRun";
import Guild from "../server-first/Guild";

function dungeonRunsToElements(runs: DungeonRun[]) {
  return runs.map(dungeonRun => (
    <DungeonRunListItem dungeonRun={dungeonRun} key={dungeonRun.startTime.toISOString()}/>
  ));
}

function finishedDungeonRunsToElements(runs: DungeonRun[]) {
  return runs.map(dungeonRun => (
    <FinishedDungeonRunListItem dungeonRun={dungeonRun} key={dungeonRun.startTime.toISOString()}/>
  ));
}

export default function Runs() {
  const [finishedRuns, setFinishedRuns] = useState(finishedDungeonRunsToElements(Guild.finishedRuns));
  const [ongoingRuns, setOngoingRuns] = useState(dungeonRunsToElements(Guild.ongoingRuns));

  Guild.onDungeonRunsChanged.subscribe(() => {
    setFinishedRuns(finishedDungeonRunsToElements(Guild.finishedRuns));
    setOngoingRuns(dungeonRunsToElements(Guild.ongoingRuns));
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