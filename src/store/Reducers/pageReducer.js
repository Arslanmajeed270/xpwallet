/* eslint-disable import/no-anonymous-default-export */
import {
	PAGE_LOADING,
	PAGE_LOADED
} from '../Actions/actionTypes';

const initialState = {
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
        case PAGE_LOADING:
			return {
				...state,
				loading: true,
			};
		case PAGE_LOADED:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
