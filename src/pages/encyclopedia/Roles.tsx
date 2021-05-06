import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Route } from "react-router";

import DPSRole from './DPSRole';
import TankRole from './TankRole';

export default function Roles() {
  return (
    <Box component='div' >
      <Typography variant="h1" component="h2" gutterBottom>Roles</Typography>

      <Route path='/encyclopedia/roles' exact component={DPSRole} />
      <Route path='/encyclopedia/roles/dps' component={DPSRole} />

      <Route path='/encyclopedia/roles' exact component={TankRole} />
      <Route path='/encyclopedia/roles/tank' component={TankRole} />
    </Box>
  );
}