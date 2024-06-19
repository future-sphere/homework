import Users from '../models/User';
import paginate from '../helpers/paginate';

const fetchUsers = async () => {
	const data = await Users.find();
	console.log(data);
	return data;
};

const createNewTodo = todo => {
	return Users.create({ todo, isFinished: false });
};

const removeTodo = (id, todo) => {
	return Users.findByIdAndDelete(id, {
		data: todo,
		isFinished: false,
	});
};

const finishTodo = (id, todo, isFinished) => {
	return Users.findByIdAndUpdate(id, {
		data: todo,
		isFinished: !isFinished,
	});
};

const UserController = {
	fetchUsers,
	createNewTodo,
	removeTodo,
	finishTodo,
};

export default UserController;
