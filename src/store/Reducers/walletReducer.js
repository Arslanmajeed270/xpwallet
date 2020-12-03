import {
    GET_ALL_TRANSACTION
	
} from '../Actions/actionTypes';

const initialState = {
	listOfTransactionHistory:[]
};

export default function (state = initialState, action) {
	switch (action.type) {
        case GET_ALL_TRANSACTION:
			return {
				...state,
				listOfTransactionHistory: action.payload,
			};
		default:
			return state;
	}
}
