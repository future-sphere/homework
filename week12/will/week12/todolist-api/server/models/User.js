import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	todo: String,
	isFinished: Boolean,
});

const Users = mongoose.model('User', UserSchema);

export default Users;
