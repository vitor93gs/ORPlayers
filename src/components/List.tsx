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
	return (
		<>
			<ul>
				{players.map((current, i) => {
					return (
						<li key={i} className="list">
                            <img src={current.url} alt="xpd" className="img" />
							<h2>{current.name}</h2>
							<p>{current.age}</p>
							<p>{current.why}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};
