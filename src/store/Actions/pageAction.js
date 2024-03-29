import axios from 'axios';

import {
    GET_USER_DETAILS,
    SET_ERRORS,
    GET_RECENT_TRANSACTION
} from './actionTypes';


const backendServerURL = process.env.REACT_APP_API_URL;


// getUserData - getUserData a new User
export const getUserData = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/getCustomer`,userData)
		.then((res) => {
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: GET_USER_DETAILS });
            }
            console.log('res on Login User', res)
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
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
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally();
};
