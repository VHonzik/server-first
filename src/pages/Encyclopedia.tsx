import { Route } from "react-router-dom";
import { Typography, List } from "@material-ui/core";

import Classes from "./encyclopedia/Classes";
import Roles from "./encyclopedia/Roles";
import ListItemLink from "../components/UI/ListItemLink";


function Encyclopedia() {
  return (
    <div>
      <Route path='/encyclopedia' exact >
        <Typography variant="h1" component="h2" gutterBottom>Encyclopedia</Typography>
        <Typography paragraph>Encyclopedia is a collection of information about this game. Think in-game wikipedia.</Typography>
        <Typography variant="h2" gutterBottom>Table of Contents</Typography>

        <List>
          <ListItemLink to="/encyclopedia/roles" primary='Roles' />
          <ListItemLink to="/encyclopedia/classes" primary='Classes' />
        </List>
      </Route>

      <Route path='/encyclopedia/roles' >
        <Roles />
      </Route>

      <Route path='/encyclopedia/classes' >
        <Classes />
      </Route>
    </div>
  );
}

export default Encyclopedia;