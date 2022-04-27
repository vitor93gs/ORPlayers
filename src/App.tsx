import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';

interface IState {
	players: {
		name: string;
		age: number;
		url: string;
		why: string;
	}[];
}

function App() {
	const [players, setPlayers] = useState<IState['players']>([
		{
			name: 'Ben Simmons',
			age: 25,
			url: 'https://cdn.vox-cdn.com/thumbor/4mKscwNVWglwQXidkmDagHSaOm8=/0x0:1404x2106/1200x800/filters:focal(612x375:836x599)/cdn.vox-cdn.com/uploads/chorus_image/image/70795860/usa_today_18141558.0.jpg',
			why: 'afraid to shoot, faking injuries to miss playoff games since 2019',
		},
	]);

	return (
		<div className="App">
			<h1> overrated players! </h1>
      <List players={players} />
		</div>
	);
}

export default App;
