import axios from 'axios';

import {
    ADD_CREDIT_CARD_SUCCESS,
    ADD_CREDIT_CARD_FAIL,
    SET_ERRORS,
    LOAD_ALL_CREDIT_CARD
} from './actionTypes';


const backendServerURL = process.env.REACT_APP_API_URL;

// Add New Credit Card 
export const addCreditCard = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/addCreditCard`, userData
		)
		.then((res) => {
			console.log("res for addCreditCard", res)
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: ADD_CREDIT_CARD_SUCCESS });
            }
            else{
                dispatch({type: ADD_CREDIT_CARD_FAIL})
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
// get All Credit Cards 
export const getAllCreditCards = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/loadAllCreditCards`, userData
		)
		.then((res) => {
			console.log("res for addCreditCard", res)
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: LOAD_ALL_CREDIT_CARD });
            }
            else{
                dispatch({type: ADD_CREDIT_CARD_FAIL})
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

// get All Credit Cards 
export const getCreditCard = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/getCreditCard`, userData
		)
		.then((res) => {
			console.log("res for addCreditCard", res)
            // if (res && res.data && res.data.resultCode === '00') {
            //     dispatch({ type: LOAD_ALL_CREDIT_CARD });
            // }
            // else{
            //     dispatch({type: ADD_CREDIT_CARD_FAIL})
            // }
    		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally();
};