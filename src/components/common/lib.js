const routesPrefix = '/';

export const redirectDashboardIfAlreadyLogin = (authReducer, history) => {
	if (authReducer && authReducer.isAuthenticated) {
		history.push(`${routesPrefix}dashboard`);
		return true;
	}
	return false;
};
