import Users from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (token) => jwt.verify(token, jwtSecret);

const register = async (data) => {
	const { firstName, lastName, age, email, phone, password, friends } = data;
	try {
		const existed = await Users.findOne({ email });
		if (existed) {
			throw 'This email has been taken';
		}
		const newUser = {
			...data,
		};
		const encryptedPassword = bcrypt.hashSync(password);
		newUser.password = encryptedPassword;
		return Users.create(newUser);
	} catch (error) {
		throw error;
	}
};

const handleLogin = async (data) => {
	const { email, password } = data;
	if (email && password) {
		try {
			const user = await Users.findOne({ email });
			if (user) {
				const passwordMatch = bcrypt.compareSync(password, user.password);
				if (passwordMatch) {
					const token = jwt.sign({ userId: user._id }, jwtSecret);
					return {
						token,
					};
				}
				throw 'Password does not match';
			}
			throw 'User email is not found';
		} catch (error) {
			throw error;
		}
	} else {
		throw 'No email or password is provided';
	}
};

const AuthController = {
	register,
	handleLogin,
	verifyToken,
};

export default AuthController;
