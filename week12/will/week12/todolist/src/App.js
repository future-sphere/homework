import './App.css';
import React, { Component, useState, useEffect } from 'react';
import List from './components/List';
import Input from './components/Input';
import UsersService from './service/users';

const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchAllTodoData = await UsersService.fetchAllTodo();
				if (fetchAllTodoData.data.success) {
					setTodos(fetchAllTodoData.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchData();
	}, []);

	// handleListColor = i => {
	// 	const todo = this.state.todo;
	// 	todo[i].isActive = !todo[i].isActive;
	// 	this.setState({
	// 		...this.state,
	// 		todo,
	// 	});
	// };

	// handleListDelete = i => {
	// 	const todo = this.state.todo;
	// 	todo.splice(i, 1);
	// 	this.setState({
	// 		...this.state,
	// 		todo,
	// 	});
	// };

	return (
		<div className='App'>
			<div className='list'>
				<List todos={todos} />
			</div>
			<div className='input'>
				<Input />
			</div>
		</div>
	);
};

export default App;
