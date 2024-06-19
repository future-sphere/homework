import React, { useState, useEffect } from 'react';
import './index.scss';
import classnames from 'classnames';
import UsersService from '../../service/users';

const List = ({ todos }) => {
	const deleteTodo = async (id, todo) => {
		try {
			const removeTodoResult = await UsersService.removeTodo(id, todo);
			if (removeTodoResult.data.success) {
				alert('Deleted');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const finishTodo = async (id, todo, isFinished) => {
		try {
			const finishTodoResult = await UsersService.finishTodo(
				id,
				todo,
				isFinished,
			);
			if (finishTodoResult.data.success) {
				alert('Finished');
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className='list-container'>
			<h2>To &thinsp;Do &thinsp;List</h2>
			<div className='list-block'>
				{todos &&
					todos.map(v => (
						<div className='list'>
							<div>
								<button onClick={() => finishTodo(v._id, v.todo, v.isFinished)}>
									<i class='fas fa-check-circle'></i>
								</button>
								<span className={v.isFinished ? 'color' : ''}>{v.todo}</span>
								<button onClick={() => deleteTodo(v._id, v.todo)}>
									<i class='fas fa-times-circle'></i>
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default List;
