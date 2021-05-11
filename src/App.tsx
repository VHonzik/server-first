import { Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import Encyclopedia from './pages/Encyclopedia';
import MainMenu from './components/MainMenu'
import Members from './pages/Members';
import Dungeons from './pages/Dungeons';
import Runs from './pages/Runs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainMenu />
      <main className={classes.content}>
        <Route path='/members'>
          <Members />
        </Route>
        <Route path='/encyclopedia'>
          <Encyclopedia />
        </Route>
        <Route path='/dungeons'>
          <Dungeons />
        </Route>
        <Route path='/runs'>
          <Runs />
        </Route>
      </main>
    </div>
  );
}

export default App;
