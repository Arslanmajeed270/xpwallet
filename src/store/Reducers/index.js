import authReducer from './authReducer';
import pageReducer from './pageReducer';
import cardReducer from './cardReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	auth : authReducer,
	page: pageReducer,
	card: cardReducer
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);