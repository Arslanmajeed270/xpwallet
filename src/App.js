

import React, { Component } from 'react';
import { Route , withRouter } from 'react-router-dom';
import Index from "./pages/index";
import AuthIndex from './pages/Auth'

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <Route 
            exact
            path={'/register'}
            component={AuthIndex} 
        />
        <Route 
            exact
            path={'/login'}
            component={AuthIndex} 
        />
        <Route 
            exact
            path={'/dashboard'}
            component={Index} 
        />
        <Route 
            exact
            path={'/'}
            component={Index} 
        />
        <Route 
            exact
            path={'/user-profile'}
            component={Index} 
        />
        <Route 
            exact
            path={'/add-money-1'}
            component={Index} 
        />
        <Route 
            exact
            path={'/add-money-2'}
            component={Index} 
        />
        <Route 
            exact
            path={'/add-bank'}
            component={Index} 
        />
        <Route 
            exact
            path={'/add-card'}
            component={Index} 
        />
        <Route 
            exact
            path={'/confirm-details'}
            component={Index} 
        />
        <Route 
            exact
            path={'/exchange'}
            component={Index} 
        />
        <Route 
            exact
            path={'/recent-transaction'}
            component={Index} 
        />
        <Route 
            exact
            path={'/transaction-details'}
            component={Index} 
        />
        <Route 
            exact
            path={'/withdraw'}
            component={Index} 
        />
        <Route 
            exact
            path={'/transfer'}
            component={Index} 
        />
        <Route 
            exact
            path={'/add-xp-wallet'}
            component={Index} 
        />
        <Route 
            exact
            path={'/recharge-bank'}
            component={Index} 
        />
        <Route 
            exact
            path={'/recharge-card'}
            component={Index} 
        />
      </React.Fragment>
    )
  }
}
export default withRouter(App);