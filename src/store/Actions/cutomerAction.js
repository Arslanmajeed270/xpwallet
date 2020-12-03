import axios from 'axios';

import {
    
} from './actionTypes';


const backendServerURL = process.env.REACT_APP_API_URL;
// getCustomerData
export const getCustomerData = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/getCustomer`, userData
		)
		.then((res) => {
			console.log("res for getCustomer", res)
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
