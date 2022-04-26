import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Component/Login'
import FriendsList from './Component/FriendsList'
import AddFriend from './Component/AddFriends'
import Logout from './Component/Logout'

function App() {
  return (
    <Router>

    <div className="App">
      <h2>Client Auth Project</h2>
      <Link className = "link" to= "/login">LOGIN</Link>
      <Link className = "link" to = '/friends'>FRIEND LIST</Link>
      <Link className = "link" to = '/friends/add'>ADD FRIEND</Link>
      <Link className = "link" to = '/logout'>LOGOUT</Link>
      <Switch>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = '/friends' component = {FriendsList}/>
        <Route exact path = '/friends/add' component={AddFriend}/>
        <Route exact path = '/logout' component={Logout}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
