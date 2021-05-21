import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import Setup from './pages/setup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={SignInPage} exact />
        <Route path='/setup' component={Setup} />
      </Switch>
    </Router>
  );
}

export default App;
