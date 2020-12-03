import axios from 'axios';

import {
    GET_ALL_TRANSACTION, SET_ERRORS,
} from './actionTypes';


const backendServerURL = process.env.REACT_APP_API_URL;
// loadWalletUsingCreditCard
export const loadWalletUsingCreditCard = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/loadWalletUsingCreditCard`, userData
		)
		.then((res) => {
			console.log("res for addCreditCard", res)
            // if (res && res.data && res.data.resultCode === '00') {
            //     dispatch({ type: ADD_CREDIT_CARD_SUCCESS });
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

// getTransactionHistory
export const getTransactionHistory = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/transactionHistory`, userData
		)
		.then((res) => {
			console.log("res for addCreditCard", res)
            if (res && res.data && res.data.resultCode === '00') {
				dispatch({
                    type: GET_ALL_TRANSACTION,
                    payload:
                    res && res.data && res.data.data && res.data.data.listOfTransactionHistory
                        ? res.data.data.listOfTransactionHistory
                        : [],
                });
            }
            else{
                dispatch({type: SET_ERRORS})
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
