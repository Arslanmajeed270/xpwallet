import React from 'react';
import {Route} from 'react-router-dom';
import Register from './register/index'
import Login from './login'


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
			</React.Fragment>
		);
	}
}

export default Routes;