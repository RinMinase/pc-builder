import { default as React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./index.scss";
import { getUser, getCommits } from "./actions";

export default function Home() {
	const dispatch = useDispatch();
	const home = useSelector((state: any) => state.home);

	useEffect(() => {
		dispatch(getUser());
		dispatch(getCommits());
	}, []);

	return(
		<div>
			<p className={style.test}>Home Component loaded!</p>
			<div className="spinner round"></div>

			<p className={`${style.bold} ${style.mb1}`}>User ID: { home.user.id }</p>

			<p>SHA IDs</p>
			{home.commits.map((value, key: number) => (
				<p key={key}>{value.sha}</p>
			))}
		</div>
	);
}
