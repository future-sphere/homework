import React from 'react';
import './index.scss';
import avatarUrl from '../../constant/avatarUrl';
import classnames from 'classnames';

const ChatList = ({ handleRead, handleClick, groups, users }) => {
	return (
		<div className='chatlist'>
			<div className='chat-list-top'>
				<p>All Conversations</p>
				<span>NEW MESSAGE</span>
			</div>
			<div className='chat-list-wrapper'>
				{groups &&
					groups.map((v, i) => {
						const last = v.conversations.length - 1;
						return (
							<div
								className='chat-list-container'
								onClick={() => handleClick(v)}>
								<div className='chat-list-avatar-block'>
									{v &&
										v.members &&
										v.members.map((n, l) => (
											<div className='avatar'>
												<img src={`${avatarUrl}${n}.jpg`} alt='' />
											</div>
										))}
								</div>
								<div className='chat-list-text'>
									<h2>{v.title}</h2>
									<h3>{v.conversations && v.conversations[last].text}</h3>
								</div>
								<div className='chat-list-number'>
									<p>
										{v.conversations &&
											`${v.conversations[last].sendTime.slice(
												0,
												2,
											)}:${v.conversations[last].sendTime.slice(2, 4)}`}
									</p>
									<div
										className={classnames('unread', {
											read: handleRead(v.conversations) == 0,
										})}>
										<h5>{handleRead(v.conversations)}</h5>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ChatList;
