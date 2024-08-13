import React from 'react';
import Title from './Title';
import List from './List';
import Form from './Form';
import './index.css';

const Content = ({
	todoLists,
	handleDelete,
	handleInputChange,
	handleMoveTodoRight,
	handleMoveTodoLeft,
	handleCompleted,
	handleClickEditTodo,
	handleEnterInput,
	input,
	handleTitleInputValueChange,
	enterTitleChange,
}) => {
	return (
		<div className='content'>
			{todoLists.map((v, i) => (
				<div key={i} className='list-container'>
					{v.isEdit ? (
						<input
							value={v.titleInputValue}
							onChange={e => handleTitleInputValueChange(e, i)}
							onKeyDown={enterTitleChange}
						/>
					) : (
						<Title title={v.title} />
					)}
					<List
						todos={v.todos}
						handleDelete={handleDelete}
						columnIndex={i}
						handleMoveTodoRight={handleMoveTodoRight}
						handleMoveTodoLeft={handleMoveTodoLeft}
						handleCompleted={handleCompleted}
						handleClickEditTodo={handleClickEditTodo}
					/>
					<Form
						input={input[i]}
						handleInputChange={handleInputChange}
						handleEnterInput={handleEnterInput}
						columnIndex={i}
					/>
				</div>
			))}
		</div>
	);
};

export default Content;
