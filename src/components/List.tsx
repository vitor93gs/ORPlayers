import React from 'react';

interface IProps1 {
	players: {
		name: string;
		age: number;
		url: string;
		why: string;
	}[];
}

export const List: React.FC<IProps1> = ({ players }) => {

	function Render(): JSX.Element[] {
		return players.map((current, i) => {
			return (
				<li key={i} className="list">
					<div>
						<img src={current.url} alt="xpd" className="img" />
						<h2>{current.name}</h2>
					</div>

					<p>{current.age} Years old</p>
					<p>NOTE: {current.why}</p>
				</li>
			);
		});
	}
	return (
		<>
			<ul>{Render()}</ul>
		</>
	);
};
