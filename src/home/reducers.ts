import { types } from "./actions";

const initialState = {
	commits: [],
	user: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.COMMITS_INFO:
			return { ...state, commits: action.payload };
		case types.USER_INFO:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}
