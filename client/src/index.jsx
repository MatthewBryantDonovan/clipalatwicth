import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import Sidenav from './components/Sidenav';
// import * as serviceWorker from './serviceWorker';


function router() {
      return (
            <Router>
                  <Route>test</Route>
            </Router>
      )
}

export default router


ReactDOM.render(router, document.getElementById('root'));

