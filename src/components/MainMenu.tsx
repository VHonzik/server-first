import { Container, List, Drawer, Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TimeDisplay from "./TimeDisplay";

import ListItemLink from "./UI/ListItemLink";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

function MainMenu() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <TimeDisplay time={new Date()}/>
      <Divider />
      <List>
        <ListItemLink to="/members" primary='Members' />
        <ListItemLink to="/dungeons" primary='Dungeons' />
        <ListItemLink to="/raids" primary='Raids' />
        <ListItemLink to="/encyclopedia" primary='Encyclopedia' />
      </List>
    </Drawer>
  );
}

export default MainMenu;