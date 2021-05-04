import { Route } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import Encyclopedia from './pages/Encyclopedia';
import MainMenu from './components/MainMenu'
import Members from './pages/Members';

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
      </main>
    </div>
  );
}

export default App;
