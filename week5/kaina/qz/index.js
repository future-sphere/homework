document.getElementById('quick-login').style.display = 'none';
const handleClick = () => {
	document.getElementById('wrapper').style.display = 'none';
	document.getElementById('quick-login').style.display = 'block';
};
const handleSwitchBack = () => {
	document.getElementById('wrapper').style.display = 'block';
	document.getElementById('quick-login').style.display = 'none';
};
