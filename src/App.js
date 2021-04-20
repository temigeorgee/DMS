import './app.css';
import DashBoardLayout from './Pages/DashBoard/DashBoardLayout';
// import bootstrap from 'bootstrap'; // eslint-disable-line no-unused-vars
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/dashboard" exact component={DashBoardLayout} />
      </Switch>
    </Router>
  );
}
