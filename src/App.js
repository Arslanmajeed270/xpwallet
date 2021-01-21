import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Index from "./pages/index";
import AuthIndex from './pages/Auth'
import PrivateRoute  from "./components/common/PrivateRoute";
// import PublicRoute  from "./components/common/PublicRoute";

import { connect } from 'react-redux';

import * as actions from './store/Actions/authActions';
class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
            authRoutes: ['/register', '/login', '/register-otp'],
            routes: [
                '/', 
                '/dashboard', 
                '/user-profile', 
                '/add-money-1', 
                '/add-money-2', 
                '/add-bank',
                '/add-card',
                '/confirm-details',
                '/exchange',
                '/recent-transaction',
                '/withdraw',
                '/transfer',
                '/add-xp-wallet',
                '/recharge-bank',
                '/recharge-card'
                ]
		};
    }
    
    render() {
        const {authRoutes, routes } = this.state;
        const { setCurrentUser } = this.props;
        if (localStorage.jwtToken) {
          setCurrentUser(JSON.parse(localStorage.jwtToken));
        }
    return (
      <React.Fragment>
        {
            authRoutes.map( (route, index) => (
                <Route 
                exact
                key={index}
                path={route}
                component={AuthIndex} 
            />
            ))
        }

        {
            routes.map( (route, index) => (
                <PrivateRoute
                exact
                key={index}
                path={route}
                component={Index} 
            />
            ))
        }

      </React.Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
    return {
      setCurrentUser: (data) => dispatch(actions.setCurrentUser(data)),
    };
  };
  
  
  export default withRouter(connect(null,mapDispatchToProps)(App));