import React, { useState } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import './App.css';

const initialTodoLists = [
	{
		title: 'Backlog',
		isEdit: false,
		titleInputValue: '',
		todos: [
			{
				text: 'Eat',
				isComplete: false,
				isEdit: false,
			},
		],
	},
	{
		title: 'In Progress',
		isEdit: false,
		titleInputValue: '',
		todos: [
			{
				text: 'Sleep',
				isComplete: false,
				isEdit: false,
			},
		],
	},
	{
		title: 'Review',
		isEdit: false,
		titleInputValue: '',
		todos: [
			{
				text: 'Code',
				isComplete: false,
				isEdit: false,
			},
		],
	},
	{
		title: 'Done',
		isEdit: false,
		titleInputValue: '',
		todos: [
			{
				text: 'Have Fun',
				isComplete: false,
				isEdit: false,
			},
		],
	},
];

const initialInputs = ['', '', '', ''];

function App() {
	const [todoLists, setTodoLists] = useState(initialTodoLists);
	const [input, setInput] = useState(initialInputs);
	const [tab, setTab] = useState('');

	const handleTabInputChange = e => {
		setTab(e.target.value);
	};

	const handleTabEnterInput = event => {
		if (event.keyCode === 13) {
			const newTodoLists = [...todoLists];
			const newTab = [...tab];
			newTodoLists.push({
				title: newTab,
				todos: [],
			});
			setTab('');
			setTodoLists(newTodoLists);
		}
	};

	const handleClearALL = () => {
		const newTodoLists = todoLists.map(v => {
			return {
				...v,
				//保存原有的todolist
				todos: [],
				//给一个空的array = 删除清空所有的todos
			};
		});
		setTodoLists(newTodoLists);
		//用新数据（newTodoLists）覆盖掉原有数据(todoLists)
	};

	const handleTitleInputValueChange = (e, i) => {
		const newTodoLists = [...todoLists];
		newTodoLists[i].titleInputValue = e.target.value;
		setTodoLists(newTodoLists);
	};

	const enterTitleChange = (event, i) => {
		if (event.keyCode === 13) {
			handleTitleInputValueChange();
		}
	};

	const handleDelete = (todoIndex, columnIndex) => {
		const newTodoLists = [...todoLists];
		newTodoLists[columnIndex].todos.splice(todoIndex, 1);
		setTodoLists(newTodoLists);
	};

	const handleInputChange = (e, i) => {
		const newInput = [...input];
		newInput[i] = e.target.value;
		setInput(newInput);
	};
	// input value: ('') and we need to store the value by using 'e.target.value'

	const handleEnterInput = (event, i) => {
		if (event.keyCode === 13) {
			const newTodoLists = [...todoLists];
			newTodoLists[i].todos.push({
				text: input[i],
				isComplete: false,
				//原有的todos里面是一个object 所以要用{}包起来
			});
			setTodoLists(newTodoLists);
			const newInput = [...input];
			newInput[i] = '';
			setInput(newInput);
		}
	};

	const handleMoveTodoRight = (todoIndex, columnIndex) => {
		const newTodoLists = [...todoLists];
		if (columnIndex !== 3) {
			const moveTodoRight = newTodoLists[columnIndex].todos.splice(
				todoIndex,
				1,
			)[0];
			//把删掉的的todo保存起来
			newTodoLists[columnIndex + 1].todos.push(moveTodoRight);
			//push保存起来的todo到右边的todolist
			setTodoLists(newTodoLists);
		}
	};

	const handleMoveTodoLeft = (todoIndex, columnIndex) => {
		const newTodoLists = [...todoLists];
		if (columnIndex !== 0) {
			const moveTodoLeft = newTodoLists[columnIndex].todos.splice(
				todoIndex,
				1,
			)[0];
			newTodoLists[columnIndex - 1].todos.push(moveTodoLeft);
			setTodoLists(newTodoLists);
		}
	};

	const handleCompleted = (todoIndex, columnIndex) => {
		const newTodoLists = [...todoLists];
		newTodoLists[columnIndex].todos[todoIndex].isComplete = !newTodoLists[
			columnIndex
		].todos[todoIndex].isComplete;
		setTodoLists(newTodoLists);
	};

	const handleClickEditTodo = (todoIndex, columnIndex) => {
		const newTodoLists = [...todoLists];
		newTodoLists[columnIndex].todos[todoIndex].isEdit = true;
		setTodoLists(newTodoLists);

		// isEdit : input
		// enter to save
	};

	return (
		<div className='App'>
			<Nav />
			<div className='content-input'>
				<i class='far fa-plus-square'></i>
				<input
					type='text'
					value={tab}
					placeholder='New List...'
					onChange={e => handleTabInputChange(e)}
				/>
			</div>
			<div className='content-button'>
				<button onClick={handleClearALL} className='clear'>
					Clear All
				</button>
			</div>
			<Content
				input={input}
				todoLists={todoLists}
				handleDelete={handleDelete}
				handleMoveTodoRight={handleMoveTodoRight}
				handleMoveTodoLeft={handleMoveTodoLeft}
				handleCompleted={handleCompleted}
				handleClickEditTodo={handleClickEditTodo}
				handleInputChange={handleInputChange}
				handleEnterInput={handleEnterInput}
				handleTitleInputValueChange={handleTitleInputValueChange}
				enterTitleChange={enterTitleChange}
			/>
		</div>
	);
}

export default App;
