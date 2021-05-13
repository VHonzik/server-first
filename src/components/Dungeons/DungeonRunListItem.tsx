import { Box, Button, Grid, Paper, LinearProgress, ListItem, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { useState } from "react";
import DungeonRun from "../../server-first/DungeonRun";
import GameTime from "../../server-first/GameTime";
import PlayerBadge from "../Players/PlayerBadge";

type DungeonRunListItemPros = {
  dungeonRun: DungeonRun
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootPaper: {
      minWidth: 600,
    },
    dungeonTitle: {
      fontSize: 24,
    },
    rootProgressBar: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.timeFlowing[theme.palette.type],
    },
  }),
);

function prettyPrintRemainingTime(timeInSeconds: number) {
  const time = Math.floor(timeInSeconds / 60.0);
  const text = `Remaining time: ${time} min${time > 1 ? 's' : ''}`;
  return text;
}

export default function DungeonRunListItem(props: DungeonRunListItemPros) {
  const { dungeonRun } = props;
  const classes = useStyles();

  const [progress, setProgress] = useState(dungeonRun.getProgress() * 100);
  const [remainingTime, setRemainingTime] = useState(prettyPrintRemainingTime(dungeonRun.getRemainingTime()));
  GameTime.onTimeChanged.subscribe(() => {
    setProgress(dungeonRun.getProgress() * 100);
    setRemainingTime(prettyPrintRemainingTime(dungeonRun.getRemainingTime()));
  });

  const players = dungeonRun.players.map(player => (
    <PlayerBadge key={player.shortName} player={player} showStatus={false}/>
  ));

  return (
    <ListItem key={dungeonRun.startTime.toString()}>
      <Paper className={classes.rootPaper}>
        <Box m={2} display='flex' justifyContent='center'>
          <Typography className={classes.dungeonTitle} display='block' gutterBottom>
            {dungeonRun.dungeon.longName}
          </Typography>
        </Box>
        <Box m={2}>
        <AvatarGroup max={5}>
          {players}
        </AvatarGroup>
        </Box>
        <Box m={2}>
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={6}>
              <Typography>{remainingTime}</Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3}>
              <Button variant="contained" color='secondary'>Cancel Run</Button>
            </Grid>
          </Grid>
        </Box>
        <LinearProgress classes={{root: classes.rootProgressBar, colorPrimary: classes.colorPrimary, bar: classes.bar}} variant="determinate" value={progress} />
    </Paper>
  </ListItem>
  );
}