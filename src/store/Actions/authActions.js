import axios from 'axios';
// import setAuthToken from '../../utils/setAuthToken';

import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    SET_ERRORS,
    SET_CURRENT_USER,
    LOGIN_USER
} from './actionTypes';

// import { setPageLoading, clearPageLoading, clearErrors } from './pageActions';

const backendServerURL = process.env.REACT_APP_API_URL;
const backendServerURL_Request = process.env.REACT_APP_API_URL_REQUEST_URL;


// Set logged in user (Verified)
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};


// Register - Register a new User
export const registerUser = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL,{
			url: backendServerURL_Request+`/registerUser`,
			requestpacket: userData
		})
		.then((res) => {
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
            if (res.data && res.data.data && res.data.data.user) {
				localStorage.setItem('jwtToken', JSON.stringify(res.data.data.user));
				dispatch(setCurrentUser(res.data.data.user));
				history.push(`/index-Canada&Ontario&Toronto`);
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