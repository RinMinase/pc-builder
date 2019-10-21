import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools as devTools } from "redux-devtools-extension";

import home from "./home/reducers";

const reducers = combineReducers({
	home,
});

function thunk() {
	return ({ dispatch, getState }) => (next) => (action) =>
		(typeof action === "function") ? action(dispatch, getState) : next(action);
}

const store = createStore(reducers, devTools(applyMiddleware(thunk())));

export default store;
