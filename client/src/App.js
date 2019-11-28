import React from 'react';
import './App.css';
import Jobs from './components/Jobs';

const mock_jobs = [
	{title: "SWE 1", company: "Google"},
	{title: "SWE 1", company: "Facebook"},
	{title: "SWE 1", company: "Apple"},
	{title: "SWE 1", company: "Amazon"},
];

function App() {
	return (
		<div className="App">
			<Jobs
				jobs={ mock_jobs }
			/>
		</div>
	);
}

export default App;
