import React, { useEffect, useState } from 'react';
import Champion from '../../components/Champion';
import Popup from '../../components/Popup';
import ChampionService from '../../services/champions';
import logoUrl from '../../constants/logoUrl';

import './index.scss';
const Home = () => {
	const [champions, setChampions] = useState({});
	const [isPopupOpen, setPopupState] = useState(false);
	const [currentChampion, setCurrentChampion] = useState({});

	// const [todos, setTodos] = useState([]);
	// const handleAddTodo = text => {
	// 	const nextTodos = todos;
	// 	nextTodos.push(text);
	// 	setTodos(nextTodos);
	// };
	useEffect(() => {
		const handleFetchChampion = async () => {
			const championsData = await ChampionService.fetchAllChampions();
			setChampions(championsData.data.data);
		};
		console.log(handleFetchChampion());
	}, []);

	const handleChampionPopup = async name => {
		const championName = await ChampionService.fetchChampionByName(name);
		setPopupState(true);
		setCurrentChampion(championName.data.data[name]);
	};
	const handlePopupHide = () => {
		setPopupState(false);
	};

	return (
		<div className='home'>
			<div className='logo'>
				<img src={logoUrl} />
			</div>
			<Popup
				currentChampion={currentChampion}
				handlePopupHide={handlePopupHide}
				isPopupOpen={isPopupOpen}
			/>
			<div className='champions-container'>
				{Object.entries(champions).map(v => (
					<Champion
						handleChampionPopup={handleChampionPopup}
						championObj={v[1]}
					/>
				))}
			</div>
			{/* <Champion
				champions={champions}
				championObj={Object.entries(champions).map(v => v[1])}
				handleChampionPopup={handleChampionPopup}
			/> */}
		</div>
	);
};

export default Home;
