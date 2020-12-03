import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    SET_ERRORS,
	SET_CURRENT_USER,
	CLEAR_CURRENT_USER,
    LOGIN_USER
} from './actionTypes';

// import { setPageLoading, clearPageLoading, clearErrors } from './pageActions';

const backendServerURL = process.env.REACT_APP_API_URL;


// Set logged in user (Verified)
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};

export const clearCurrentUser = () => {
	return {
		type: CLEAR_CURRENT_USER,
	};
};

// Log user out (Verified)
export const logoutUser = (history) => (dispatch) => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(clearCurrentUser());
	history.push(`/login`);
};


// Register - Register a new User
export const registerUser = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/registerUser`, userData
		)
		.then((res) => {
			console.log("res for registeration", res)
            if (res && res.data && res.data.resultCode === '200') {
                dispatch({ type: CREATE_USER_SUCCESS });
            }
            else{
                dispatch({type: CREATE_USER_FAIL})
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
// Logiin - Login a User
export const loginUser = (userData, history) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/authenticateUser', userData)
		.then((res) => {
			console.log("res for login", res)
            if (res && res.data && res.data.responseData && res.data.responseData.user) {
				localStorage.setItem('jwtToken', JSON.stringify(res.data.responseData.user));
				dispatch(setCurrentUser(res.data.responseData.user));
				history.push(`/`);
			} else {
				dispatch({
					type: SET_ERRORS,
					payload: { message: 'Username or password wrong!' },
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally();
};