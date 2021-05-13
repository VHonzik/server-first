import { Box, Paper, ListItem, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import DungeonRun from "../../server-first/DungeonRun";
import SuccessButton from "../UI/SuccessButton";

type FinishedDungeonRunListItemProps = {
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
  }),
);


export default function FinishedDungeonRunListItem(props: FinishedDungeonRunListItemProps) {
  const { dungeonRun } = props;
  const classes = useStyles();

  return (
    <ListItem key={dungeonRun.startTime.toString()}>
      <Paper className={classes.rootPaper}>
        <Box m={2} display='flex' justifyContent='center'>
          <Typography className={classes.dungeonTitle} display='block' gutterBottom>
            {dungeonRun.dungeon.longName}
          </Typography>
        </Box>
        <Box m={2} display='flex' justifyContent='center'>
          <SuccessButton>Assign loot</SuccessButton>
        </Box>
    </Paper>
  </ListItem>
  );
}