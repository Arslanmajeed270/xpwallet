import {
	GET_USER_DETAILS,
	GET_RECENT_TRANSACTION
} from '../Actions/actionTypes';

const initialState = {
    userData: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
        case GET_USER_DETAILS:
			return {
				...state,
				userData: action.payload,
			};
		default:
			return state;
	}
}
