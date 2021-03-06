import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API.js';
import { Link } from 'react-router-dom';

function Login(props) {

      // Hooks
      const [username, setUsername] = useState({});
      const [redirect, setRedirect] = useState(false);
      const [password, setPassword] = useState({});
      const [loginFail, setLoginFail] = useState(false);

      // Username form field
      function updateUsername(e) {
            const newVal = e.target.value;
            setUsername(newVal);
      }

      // Password form field
      function updatePassword(e) {
            const newVal = e.target.value;
            setPassword(newVal);
      }

      // Form submit
      const submit = e => {
            e.preventDefault();
            const object = {
                  username,
                  password
            };

            // Call to login user
            API.loginUser(object)
            .then(function(data){
                  API.userSavedInfo()
                  .then(function (data) {
                        setRedirect(true);
                  })
                  .catch(function (err) {
                        setLoginFail("Username or Password was incorrect.");
                  });
            })
            .catch(function(err){
            });

      }
      
      // Use Effect to get user data
      useEffect(()=> {
            API.userSavedInfo().then(function (data) {
                  setRedirect(true);
            }).catch(function (err) {
            });
            if(redirect === true) {
                  props.loginRoutes();
            }
      }, [redirect]);

      return (
      <React.Fragment>
            {redirect && <Redirect to='/home' />}
            <div className="container">
                  <form action="submit" onSubmit={submit} >
                        <h1>Login!</h1>
                        <label htmlFor="username" style={{color: 'rgb(30, 136, 229)'}}>Username</label>
                        <input type="text" id="username" onChange={updateUsername} required  />
                        <label htmlFor="password" style={{color: 'rgb(30, 136, 229)'}}>Password</label>
                        <input type="password" id="password" onChange={updatePassword} required  />
                        <button type="submit" className="btn" >Login</button>
                  </form>
                  <p>Don't have an account? create one <Link className="linkText" to="/register" style={{color: 'rgb(30, 136, 229)'}}>here!</Link> </p>
                  {(loginFail) ?
                  <strong><p style={{color: "Red", fontSize: "2em"}}> {loginFail} </p></strong>
                  :
                  <span></span>
                  }
            </div>
      </React.Fragment>
      );
}

export default Login;
