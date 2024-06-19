import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import HomePage from '../Home';
import ChampionService from '../../services/champions';
import skinUrl from '../../constants/skinUrl';
import logoUrl from '../../constants/logoUrl';
import skillUrl from '../../constants/skillUrl';
import './index.scss';

const Champion = () => {
	const [championName, setChampionName] = useState('');
	const [championData, setChampionData] = useState({});
	useEffect(() => {
		const addressArr = window.location.href.split('/');
		const championName = addressArr[addressArr.length - 1];
		setChampionName(championName);
	}, []);
	useEffect(() => {
		const fetchChampionData = async () => {
			const champion = await ChampionService.fetchChampionByName(championName);
			setChampionData(champion.data.data[championName]);
		};
		championName && fetchChampionData();
	}, [championName]);
	return (
		<div className='champion-wrapper'>
			<Link to='/'>
				<img className='logo' src={logoUrl} />
			</Link>
			<div className='top-container'>
				<div>
					<h1>{championData.name}</h1>
					<h2>{championData.title}</h2>
				</div>
				<img src={`${skinUrl}${championName}_0.jpg`} />
			</div>
			<h3>{championData.lore}</h3>
			<div className='skill-container'>
				{championData.spells &&
					championData.spells.map(skill => (
						<div className='skill-block'>
							<img src={`${skillUrl}${skill.image.full}`} />
							<h3>{skill.name}</h3> <h4>{skill.description}</h4>
						</div>
					))}
			</div>
		</div>
	);
};

export default Champion;
