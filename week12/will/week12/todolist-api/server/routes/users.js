import express from 'express';
import UserController from '../controllers/users';
const router = express.Router();
import Users from '../models/User';

/* GET users listing. */
router.get('/fetch', async (req, res, next) => {
	const data = await UserController.fetchUsers();
	res.json({ success: true, data });
});

router.post('/create/todo', async (req, res) => {
	const { todo } = req.body;
	const data = await UserController.createNewTodo(todo);
	res.json({
		data,
		success: true,
	});
});

router.post('/remove/todo', async (req, res) => {
	const { id, todo } = req.body;
	const data = await UserController.removeTodo(id, todo);
	res.json({
		data,
		success: true,
	});
});

router.post('/finish/todo', async (req, res) => {
	const { id, todo, isFinished } = req.body;
	const data = await UserController.finishTodo(id, todo, isFinished);
	res.json({
		data,
		success: true,
	});
});

export default router;
