import React from 'react';
import { Title } from './components/Title';
import { Card } from './components/Card';
// styles
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<Title />
				<Card />
			</header>
		</div>
	);
}

export default App;
