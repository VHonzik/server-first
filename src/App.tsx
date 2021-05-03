import { Route } from 'react-router-dom';
import Encyclopedia from './pages/Encyclopedia';
import MainMenu from './components/MainMenu'
import Members from './pages/Members';

function App() {
  return (
    <div>
      <MainMenu />
      <Route path='/members'>
        <Members />
      </Route>
      <Route path='/encyclopedia'>
        <Encyclopedia />
      </Route>
    </div>
  );
}

export default App;
