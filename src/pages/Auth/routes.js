import React from 'react';
import {Route} from 'react-router-dom';
import Register from './register'
import Login from './login'
import Otp from './otp'


class Routes extends React.Component {

	render(){
		return (
			<React.Fragment>
				<Route  
					exact 
					path={"/register"} 
					component={Register}
				/>
				<Route  
					exact 
					path={"/login"} 
					component={Login}
				/>
				<Route  
					exact 
					path={"/register-otp"} 
					component={Otp}
				/>
			</React.Fragment>
		);
	}
}

export default Routes;