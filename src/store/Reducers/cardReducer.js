/* eslint-disable import/no-anonymous-default-export */
import { 
	GET_ALL_CREDIT_CARDS
} from '../Actions/actionTypes';

const initialState = {
	creditCardList:[],
};

export default function (state = initialState, action) {
	switch (action.type) {
        case GET_ALL_CREDIT_CARDS:
			{
				return {
					...state,
					creditCardList: action.payload,
				};
			}	
		default:
			return state;
	}
}
