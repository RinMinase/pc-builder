import axios from "axios";

export function getCommits() {
	return (dispatch) => {
		axios.get("https://api.github.com/repos/torvalds/linux/commits?per_page=5")
			.then((response) => {
				dispatch({ type: types.COMMITS_INFO, payload: response.data });
			});
	};
}

export function getUser() {
	return (dispatch) => {
		axios.get("https://api.github.com/users/torvalds")
			.then((response) => {
				dispatch({ type: types.USER_INFO, payload: response.data });
			});
	};
}

export const types = {
	COMMITS_INFO: "COMMITS_INFO",
	USER_INFO: "USER_INFO",
};
