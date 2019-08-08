import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from '../src/components/Posts';
import PostForm from '../src/components/PostForm';
function App() {
	return (
		<div className="App">
			<PostForm />
			<hr />
			<Posts />
		</div>
	);
}

export default App;
