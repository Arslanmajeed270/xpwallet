import {
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
	SET_CURRENT_USER,
	CLEAR_CURRENT_USER
	
} from '../Actions/actionTypes';

const initialState = {
    registerUser: false,
	isAuthenticated:false,
	user:{}
};

export default function (state = initialState, action) {
	switch (action.type) {
        case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case CLEAR_CURRENT_USER:
			return {
				...state,
				isAuthenticated: false,
				user: {},
			};
		case CREATE_USER_SUCCESS:
			return {
				...state,
				registerUser: true,
			};
		case CREATE_USER_FAIL:
			return {
				...state,
				registerUser: false,
			};
		default:
			return state;
	}
}
