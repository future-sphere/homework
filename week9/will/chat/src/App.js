import React, { useEffect, useState } from 'react';
import './App.scss';
import Services from './services';
import ChatList from './components/ChatList';
import ChatContent from './components/ChatContent';
import NavList from './components/NavList';
import SearchBar from './components/SearchBar';

const App = () => {
	const [isActive, setActiveState] = useState(false);
	const [currentChat, setCurrentChat] = useState({});
	const [groups, setGroups] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchGroupsData = async () => {
			const data = await Services.fetchGroups();
			setGroups(data.data);
		};
		fetchGroupsData();
	}, []);
	useEffect(() => {
		const fetchUsersData = async () => {
			const data = await Services.fetchUsers();
			setUsers(data.data);
		};
		fetchUsersData();
	}, []);

	const handleClick = async v => {
		await setActiveState(true);
		setCurrentChat(v);
	};

	const handleClose = () => {
		setActiveState(!isActive);
	};

	const handleRead = input => {
		let n = 0;
		for (let i = 0; i < input.length; i++) {
			if (input[i].isRead == false) n++;
			console.log(n);
		}
		return n;
	};

	return (
		<div className='app-wrapper'>
			<NavList />
			<div className='body-container'>
				<SearchBar />
				<div className='body-block'>
					<ChatList
						handleRead={handleRead}
						handleClick={handleClick}
						groups={groups}
						users={users}
					/>
					<ChatContent
						handleClose={handleClose}
						isActive={isActive}
						currentChat={currentChat}
						users={users}
					/>
				</div>
			</div>
		</div>
	);
};
export default App;
