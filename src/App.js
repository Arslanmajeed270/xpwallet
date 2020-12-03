

import React, { Component } from 'react';
import { Route , withRouter } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute'
import Index from "./pages/index";
import AuthIndex from './pages/Auth'
import { connect } from 'react-redux';

import * as actions from './store/Actions/index';

class App extends Component {
  render() {
    if (localStorage.jwtToken) {
        this.props.setCurrentUser(JSON.parse(localStorage.jwtToken));
    }
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
        <PrivateRoute
            exact
            path={'/dashboard'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/user-profile'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/add-money-1'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/add-money-2'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/add-bank'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/add-card'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/confirm-details'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/exchange'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/recent-transaction'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/transaction-details'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/withdraw'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/transfer'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/add-xp-wallet'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/recharge-bank'}
            component={Index} 
        />
        <PrivateRoute
            exact
            path={'/recharge-card'}
            component={Index} 
        />
      </React.Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));