import axios from 'axios'
import { Success, Error } from '../../components/common/toastify'

import {
	GET_ALL_CREDIT_CARDS
} from './actionTypes';

import { setPageLoading, clearPageLoading } from './index';


const backendServerURL = process.env.REACT_APP_API_URL;

// addCreditCard 
export const addCreditCard = ( requestData, history ) => ( dispatch ) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/addCreditCard`,requestData)
		.then((res) => {
            if (res && res.data && res.data.message === 'Success') {
				Success("Card added successfully!");
				history.replace('/add-money-2');
            }
            else{
                Error("Failed to add card!");
            }
            console.log('res on Login User', res)
		})
		.catch((err) => {
			console.log("checking error: ", err);
			Error('Something went wrong! Please try again.');
		})
		.finally(()=> {
			dispatch(clearPageLoading());
		});
};

// Load all the creditCards
export const getCreditCardList = (requestData) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/loadAllCreditCards`,requestData)
		.then((res) => {
			console.log('checking res in getCreditCardList: ', res);
			if (res && res.data && res.data.message === 'Success') {
				dispatch({ type: GET_ALL_CREDIT_CARDS, 
					payload: res.data.responseData && res.data.responseData.data ? 
					res.data.responseData.data : [] });
            }
            else{
                Error("Failed to add card!");
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