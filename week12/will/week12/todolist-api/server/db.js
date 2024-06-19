import mongoose from 'mongoose';
require('dotenv').config();

const connectionString =
	'mongodb+srv://will:will941102@cluster0-g7cvv.mongodb.net/willtodo?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

let isConnected;

const connectToDatabase = () => {
	if (isConnected) {
		console.log('=> using existing database connection');
		return Promise.resolve();
	}
	console.log('=> using new database connection');
	return mongoose
		.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(db => {
			isConnected = db.connections[0].readyState;
			console.log('Connection Success!');
		})
		.catch(e => {
			console.log(e);
		});
};

export default connectToDatabase;
