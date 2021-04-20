import './app.css';
import DashBoardLayout from './Pages/DashBoard/DashBoardLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import './App.css';
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
