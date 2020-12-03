import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
	console.log("heelo",authReducer.isAuthenticated)
	,<Route 
		{...rest}
		render={(props) =>
			authReducer.isAuthenticated === true ? (
				console.log("arey bhai to idr kidr ?"),
				<Component {...props} />
			) : (
				console.log("jigar tara lia kuc b "),
				<Redirect to={'/login'} />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	authReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	authReducer: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
