import { Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
    </Switch>
  );
}

export default App;
