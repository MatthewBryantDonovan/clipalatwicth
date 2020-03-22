import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ClipRiver from "./ClipRiver"
import API from "../utils/API"


function Home(props) {
      const [userData, setUserData] = useState();
      const [riverData, setRiverData] = useState();

      useEffect(() => {
            if (!riverData) {
                API.userSavedInfo().then(function (data) {
                    console.log(data);
                    setUserData(data.data)
                }).catch(function (err) {
                    console.log(err);
                });
            }
            if (!userData) {
                API.getRiver().then(function (data) {
                    console.log("River Obtained");
                    console.log(data.data);
                    
                    setRiverData(data.data)
                }).catch(function (err) {
                });
            }
          }, [])

      return (
            <React.Fragment>
                  <div className="container">
                        <div className="row">
                              <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                          <div className="card-content white-text">
                                                <span className="card-title">Home placeholder</span>
                                                <p>Welcome home!</p>
                                          </div>
                                    </div>
                                    {(riverData) ? <ClipRiver riverData={riverData} /> : <div> Loading River </div>}
                              </div>
                        </div>
                  </div>
            </React.Fragment>
      )
}

export default Home
