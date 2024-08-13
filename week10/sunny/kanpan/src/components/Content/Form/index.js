import React from 'react';
import './index.css';

const Form = ({ handleInputChange, input, handleEnterInput, columnIndex }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			{/* form自带默认刷新，用以上方法（既定事实）来停止刷新 */}
			<input
				type='text'
				value={input}
				placeholder='Type something'
				onChange={e => handleInputChange(e, columnIndex)}
				onKeyDown={e => handleEnterInput(e, columnIndex)}
			/>
		</form>
	);
};

export default Form;
