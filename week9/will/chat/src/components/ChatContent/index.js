import React from 'react';
import './index.scss';
import avatarUrl from '../../constant/avatarUrl';
import classnames from 'classnames';

const ChatContent = ({ isActive, currentChat, users, handleClose }) => {
	return (
		<div>
			<div className={classnames('start', { isShow: !isActive })}>
				<img src='https://img.icons8.com/cotton/2x/chat.png' alt='pic' />
			</div>
			<div className={classnames('chatcontent', { isOpen: isActive })}>
				<div className='chat-content-top'>
					<h4 onClick={handleClose}>{currentChat && currentChat.title}</h4>
					<div className='chat-content-avatar-block'>
						{currentChat &&
							currentChat.members &&
							currentChat.members.map(j => (
								<div className='avatar'>
									<img src={`${avatarUrl}${j}.jpg`} alt='#' />
								</div>
							))}
					</div>
				</div>
				<div className='chat-content-box'>
					{currentChat &&
						currentChat.conversations &&
						currentChat.conversations.map((k, a) => (
							<div className={classnames('others', { me: k.sender == 7 })}>
								<div className='chat-content-info-wrapper'>
									<div className='chat-content-info-container'>
										<div className='chat-content-info-left'>
											<img src={`${avatarUrl}${k.sender}.jpg`} alt='' />
											<span>
												{`${users[k.sender].firstName} ${
													users[k.sender].lastName
												}`}
											</span>
										</div>
										<h4>{`${k.sendTime.slice(0, 2)}:${k.sendTime.slice(
											2,
											4,
										)}`}</h4>
									</div>
									<div className='chat-content-content'>
										<h3>{k.text}</h3>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default ChatContent;
