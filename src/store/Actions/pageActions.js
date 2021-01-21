import axios from 'axios';

import {
    GET_USER_DETAILS,
	GET_RECENT_TRANSACTION,
	PAGE_LOADED,
	PAGE_LOADING
} from './actionTypes';


const backendServerURL = process.env.REACT_APP_API_URL;


export const setPageLoading = () => {
	return {
		type: PAGE_LOADING,
	};
};

export const clearPageLoading = () => {
	return {
		type: PAGE_LOADED,
	};
};

// **** Starting Page functions ****** //

// getUserData - getUserData a new User
export const getUserData = (userData) => (dispatch) => {
	// dispatch(setPageLoading());
	console.log('checking userData: ', userData);
	axios
		.post(backendServerURL+`/getCustomer`,userData)
		.then((res) => {
			console.log('res on Login User', res)
            if (res && res.data && res.data.resultCode === '00') {
				dispatch({ 
					type: GET_USER_DETAILS,
					payload: res.data && res.data.responseData && res.data.responseData.customer ? res.data.responseData.customer : {},
				 });
            }
		})
		.catch((err) => {
			// dispatch({
			// 	type: SET_ERRORS,
			// 	// payload:err && err.response && err.response.data ? err.response.data : {},
			// });
		})
		.finally();
};

// getRecentTransaction - getRecentTransaction a new User
export const getRecentTransaction = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/transactionHistory`,userData)
		.then((res) => {
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: GET_RECENT_TRANSACTION });
            }
            console.log('res on Login User', res)
		})
		.catch((err) => {
			// dispatch({
			// 	type: SET_ERRORS,
			// 	// payload:err && err.response && err.response.data ? err.response.data : {},
			// });
		})
		.finally();
};
