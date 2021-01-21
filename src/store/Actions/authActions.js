import axios from 'axios';
import { Success, Error } from '../../components/common/toastify'

import {
	SET_CURRENT_USER
} from './actionTypes';

import { setPageLoading, clearPageLoading } from './index';

const backendServerURL = process.env.REACT_APP_API_URL;


// Set logged in user (Verified)
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};

// Generate - Generate a pin for the User
export const generatePin = (userData, history) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/generatePin`,userData)
		.then((res) => {
			console.log('checking generatePin resp: ', res);
			if(res.data.message === "Success"){
				history.push('/register-otp');
				Success('Please verify otp to create account!');
			}else{
				Error('Something went wrong! Please try again.');
			}
		})
		.catch((err) => {
			console.log("checking error: ", err);
			Error('Something went wrong! Please try again.');
		})
		.finally(()=> {
			dispatch(clearPageLoading());
		});
};

// Verify - Verify a otp for the User
export const verifyPin = (pinData, userData, history) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/verifyPin`,pinData)
		.then((res) => {
			console.log('checking verifyPin resp: ', res);
			if(res.data.message === "Success"){
				dispatch(registerUser(userData, history));
			}else{
				Error(res.data.message);
			}
		})
		.catch((err) => {
			console.log("checking error: ", err);
			Error('Something went wrong! Please try again.');
		})
		.finally(()=> {
			dispatch(clearPageLoading());
		});
};

// Register - Register a new User
export const registerUser = (userData, history) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/registerUser`,userData)
		.then((res) => {
			console.log('checking registerUser resp: ', res);	
			if(res.data.message === "Success"){
				Success("User successfully created!");
				history.push('/login');
				localStorage.removeItem("registerUser");
			}else{
				Error(res.data.message);
			}
		})
		.catch((err) => {
			console.log("checking error: ", err);
			Error('Something went wrong! Please try again.');
		})
		.finally(()=> {
			dispatch(clearPageLoading());
		});
};

// Login - Login a User
export const loginUser = (userData, history) => (dispatch) => {
	dispatch(setPageLoading());
	console.log("checking userData: ", loginUser);
	axios
		.post(backendServerURL + '/authenticateUser', userData)
		.then((res) => {
			console.log("res from backend", res);
			if(res.data.message === "Success"){
				const userResponse = res.data.responseData.user;
				localStorage.setItem('jwtToken', JSON.stringify(userResponse));
				dispatch(setCurrentUser(userResponse));
				history.push('/dashboard')
				Success("User successfully logged in!");
			}else{
				Error("Username or password wrong!");
			}
		})
		.catch((err) => {
			console.log("checking error: ", err);
			Error('Something went wrong! Please try again.');
		})
		.finally(()=> {
			dispatch(clearPageLoading());
		});
};