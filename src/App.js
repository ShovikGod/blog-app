import React from 'react'
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MyBlogs from './pages/MyBlogs';
import AddEditBlog from './pages/AddEditBlog';
import Comments from './pages/Comments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthApi from './utils/AuthApi';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Profile />
        </Route>
        <Route path="/add">
          <AddEditBlog />
        </Route>
        <Route path="/my-blogs">
          <MyBlogs />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
