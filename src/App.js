import DashBoardLayout from './Pages/DashBoard/DashBoardLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import './app.css';
import SigninPage from './Pages/SigninPage/SigninPage';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/dashboard" exact component={DashBoardLayout} />
        <Route path="/sign-in" exact component={SigninPage} />
      </Switch>
    </Router>
  );
}
