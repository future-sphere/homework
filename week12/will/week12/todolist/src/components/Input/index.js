import React, { useState } from 'react';
import './index.scss';
import UsersService from '../../service/users';

const Input = () => {
	const [inputData, setInputData] = useState('');

	// const handleInputPush = () => {
	// if (this.state.data == '') {
	// 	alert("What's your plan for the day?");
	// } else {
	// 	todo.push({
	// 		text: this.state.data,
	// 		isActive: false,
	// 	});
	// 	this.setState({
	// 		...this.state,
	// 		todo,
	// 		data: '',
	// 	});
	// }
	// };

	const addTodo = async inputData => {
		try {
			const createNewTodoResult = await UsersService.createNewTodo(inputData);
			console.log(createNewTodoResult);
			if (createNewTodoResult.data.success) {
				alert('Added');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='input-container'>
			<input
				type='text'
				value={inputData}
				onChange={e => setInputData(e.target.value)}
				placeholder='Start your plans'
			/>
			<button onClick={() => (handleInputPush(), addTodo(inputData))}>
				Do&thinsp;it
			</button>
		</div>
	);
};

export default Input;
