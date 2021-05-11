import { Box, Paper, ListItem, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import Dungeon from "../../server-first/Dungeon";

type DungeonListItemProps = {
  dungeon: Dungeon
}

const useStyles = makeStyles({
  root: {
    minWidth: 600,
  },
  title: {
    fontSize: 24,
  }
});

export default function DungeonListItem(props: DungeonListItemProps) {
  const { dungeon } = props;
  const classes = useStyles();

  return (
    <ListItem>
      <Paper className={classes.root}>
        <Box m={2} display='flex' justifyContent='center'>
          <Typography className={classes.title} display='block' gutterBottom>
            {dungeon.longName}
          </Typography>
        </Box>
        <Box m={2}>
          <Typography paragraph>Item level: 10</Typography>
          <Typography paragraph>Duration: 20-40 min</Typography>
        </Box>
        <Box m={2}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Button variant="contained">Start run</Button>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <Button>More info</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </ListItem>
  );
}