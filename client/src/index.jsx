import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import Sidenav from './components/Sidenav';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import UserSearchPage from './pages/UserSearchPage'
import UserSavedPage from './pages/UserSavedPage'


// import * as serviceWorker from './serviceWorker';


function Routing() {
      
      const acctRoutes = [
            {
                  path: '/home',
                  name: 'Home',
                  i: 'home',
            },
            {
                  path: '/search',
                  name: 'Search',
                  i: 'search',
            },
            {
                  path: '/saved',
                  name: 'Saved',
                  i: 'favorite',
            },
            {
                  path: '/login',
                  name: 'Logout',
                  i: 'person',
            }
      ]
      
      const noAcctRoutes = [
            {
                  path: '/home',
                  name: 'Home',
                  i: 'home'
            },
            {
                  path: '/register',
                  name: 'Register',
                  i: 'create'
            },
            {
                  path: '/logout',
                  name: 'Login',
                  i: 'person'
            },
      ]
      
      const [routes, setRoutes] = useState(noAcctRoutes);
            
      const loginRoutesChanged = () => setRoutes(acctRoutes);

      const loginRoutesChangedBack = () => setRoutes(noAcctRoutes);

      return (
            <Router>
                  <Sidenav routes={routes} />

                  <Route
                        path='/'
                        exact={true}
                        component={() => <Redirect to="/home" loginRoutes={loginRoutesChangedBack} />}
                  />

                  <Route
                        path='/home'
                        component={() => <Home loginRoutes={loginRoutesChangedBack}/>}
                  />

                  <Route
                        path='/login'
                        component={() => <Login loginRoutes={loginRoutesChanged} />}
                  />

                  <Route
                        path='/register'
                        component={() => <Register routes={routes} loginRoutes={loginRoutesChanged} />}
                  />

                  <Route
                        path='/search'
                        component={() => <UserSearchPage routes={routes} loginRoutes={loginRoutesChanged} />}
                  />

                  <Route
                        path='/saved'
                        component={() => <UserSavedPage routes={routes} loginRoutes={loginRoutesChanged} />}
                  />

                  <Route
                        path='/logout'
                        component={() => <UserSavedPage routes={routes} loginRoutes={loginRoutesChangedBack} />}
                  />

            </Router>
      )
}
export default Routing


ReactDOM.render(<Routing />, document.getElementById('root'));

