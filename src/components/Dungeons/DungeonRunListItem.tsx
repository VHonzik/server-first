import { Box, Paper, LinearProgress, ListItem, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { useState } from "react";
import DungeonRun from "../../server-first/DungeonRun";
import GameTime from "../../server-first/GameTime";

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


export default function DungeonRunListItem(props: DungeonRunListItemPros) {
  const { dungeonRun } = props;
  const classes = useStyles();

  const [progress, setProgress] = useState(dungeonRun.getProgress() * 100);
  GameTime.onTimeChanged.subscribe(() => {
    setProgress(dungeonRun.getProgress() * 100);
  });

  return (
    <ListItem key={dungeonRun.startTime.toString()}>
      <Paper className={classes.rootPaper}>
        <Box m={2} display='flex' justifyContent='center'>
          <Typography className={classes.dungeonTitle} display='block' gutterBottom>
            {dungeonRun.dungeon.longName}
          </Typography>
        </Box>
        <LinearProgress classes={{root: classes.rootProgressBar, colorPrimary: classes.colorPrimary, bar: classes.bar}} variant="determinate" value={progress} />
    </Paper>
  </ListItem>
  );
}