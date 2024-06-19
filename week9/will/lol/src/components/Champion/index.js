import React from 'react';
import { Link } from 'react-router-dom';
import skinUrl from '../../constants/skinUrl';

const Champion = ({ championObj, handleChampionPopup }) => {
	return (
		<div className='champion'>
			<Link to={`/champion/${championObj.id}`}>
				<h2 className='name'>{championObj.id}</h2>
			</Link>
			<img
				onClick={() => handleChampionPopup(championObj.id)}
				src={`${skinUrl}${championObj.id}_0.jpg`}
				alt=''
			/>
			{/* <img src={skinUrl + champion.id + '_0.jpg'} alt='' /> */}
		</div>
	);
};

export default Champion;
