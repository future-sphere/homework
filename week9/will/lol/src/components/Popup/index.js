import React from 'react';
import classnames from 'classnames';
import skinUrl from '../../constants/skinUrl';

import './index.scss';
const Popup = ({ isPopupOpen, handlePopupHide, currentChampion }) => {
	return (
		<div
			className={classnames('popup', {
				isActive: isPopupOpen,
			})}>
			<dic className='title'>
				<h2>{currentChampion.id}</h2>
				<h3 onClick={handlePopupHide}>X</h3>
			</dic>
			{/* <img src={`${skinUrl}${currentChampion.id}_0.jpg`} alt='' /> */}
			<div className='skins'>
				{currentChampion.skins &&
					currentChampion.skins.map(skin => (
						<img src={`${skinUrl}${currentChampion.id}_${skin.num}.jpg`} />
					))}
			</div>
		</div>
	);
};

export default Popup;
