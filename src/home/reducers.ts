import { types } from "./actions";
import { ReducerAction } from "../reducers";

const initState = {
	commits: [],
	user: {},
};

export default function reducer(state = initState, action: ReducerAction) {
	switch (action.type) {
		case types.COMMITS_INFO:
			return { ...state, commits: action.payload };
		case types.USER_INFO:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}
