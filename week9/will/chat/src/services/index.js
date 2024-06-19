import axios from 'axios';

const fetchGroups = () => {
	return axios.get('/groups.json');
};

const fetchUsers = () => {
	return axios.get('/users.json');
};

const Services = {
	fetchGroups,
	fetchUsers,
};

export default Services;
