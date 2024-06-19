import axios from 'axios';

const url = 'http://localhost:5000';

const fetchAllTodo = () => {
	return axios.get(`${url}/users/fetch`);
};

const createNewTodo = todo => {
	return axios.post(`${url}/users/create/todo`, { todo });
};

const removeTodo = (id, todo) => {
	return axios.post(`${url}/users/remove/todo`, { id, todo });
};

const finishTodo = (id, todo, isFinished) => {
	return axios.post(`${url}/users/finish/todo`, { id, todo, isFinished });
};

const UsersService = {
	fetchAllTodo,
	createNewTodo,
	removeTodo,
	finishTodo,
};

export default UsersService;
