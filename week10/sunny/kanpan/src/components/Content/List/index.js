import React from 'react';
import classnames from 'classnames';
import './index.css';

const List = ({
	todos,
	handleDelete,
	columnIndex,
	handleMoveTodoRight,
	handleMoveTodoLeft,
	handleCompleted,
	handleClickEditTodo,
}) => {
	return (
		<div className='list'>
			{todos.map((v, i) => (
				<div key={i} className={v.isComplete ? 'completed' : 'todo-wrapper'}>
					<div className='todo-top'>
						<p onClick={() => handleClickEditTodo(i, columnIndex)}>
							{v.isEdit ? <input type='text' /> : <p>{v.text}</p>}
						</p>
						<div className='todo-button'>
							<button onClick={() => handleCompleted(i, columnIndex)}>
								{v.isComplete ? (
									<i className='far fa-check-circle'></i>
								) : (
									<i className='fas fa-ban'></i>
								)}
							</button>
							<button onClick={() => handleDelete(i, columnIndex)}>
								<i className='far fa-times-circle'></i>
							</button>
						</div>
					</div>
					<div className='todo-bottom'>
						<button onClick={() => handleMoveTodoLeft(i, columnIndex)}>
							<i className='fas fa-chevron-left'></i>
						</button>
						<button onClick={() => handleMoveTodoRight(i, columnIndex)}>
							<i className='fas fa-chevron-right'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default List;
