import React, { useContext } from 'react'
import Profile from '../pages/Profile';
import MyBlogs from '../pages/MyBlogs';
import AddEditBlog from '../pages/AddEditBlog';
import Comments from '../pages/Comments';
import Login from '../pages/Login';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthApi from '../utils/AuthApi';

function Routes() {
    const authApi = useContext(AuthApi);
    return (
        <Switch>
            <RouteRegisteration path="/login" component={Login} auth={authApi.auth} />
            <RouteRegisteration path="/signup" component={Signup} auth={authApi.auth} />
            <RouteProtected path="/" component={Profile} auth={authApi.auth} exact/>
            <RouteProtected path="/add" component={AddEditBlog} auth={authApi.auth} />
            <RouteProtected path="/my-blogs" component={MyBlogs} auth={authApi.auth} />
            <RouteProtected path="/comments" component={Comments} auth={authApi.auth} />
        </Switch>
    );
}

const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
                !auth ? <Component {...props} /> : <Redirect to="/my-blogs" />
            }
        />
    );
};

const RouteProtected = ({ auth, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
                auth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
  

export default Routes;
