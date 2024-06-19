// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Champion from './components/Champion';
// import Popup from './components/Popup';
// import ChampionService from './services/champions';
// class App extends React.Component {
// 	state = {
// 		champions: {},
// 		isPopupOpen: false,
// 		currentChampion: {},
// 	};
// 	handleFetchChampion = async () => {
// 		const championsData = await ChampionService.fetchAllChampions();
// 		this.setState({
// 			...this.state,
// 			champions: championsData.data.data,
// 		});
// 	};
// 	handleChampionPopup = async name => {
// 		const champion = await ChampionService.fetchChampionByName(name);
// 		this.setState({
// 			...this.state,
// 			isPopupOpen: true,
// 			currentChampion: champion.data.data[name],
// 		});
// 	};
// 	handlePopupHide = () => {
// 		this.setState({ isPopupOpen: false });
// 	};
// 	componentWillMount = () => {};
// 	componentDidMount = () => {
// 		this.handleFetchChampion();
// 	};
// 	componentWillUpdate = () => {};
// 	componentDidUpdate = prevState => {};
// 	render() {
// 		return (
// 			<div className='App'>
// 				<Popup
// 					currentChampion={this.state.currentChampion}
// 					handlePopupHide={this.handlePopupHide}
// 					isPopupOpen={this.state.isPopupOpen}
// 				/>
// 				<div className='champions-container'>
// {Object.entries(this.state.champions).map(v => (
// 	<Champion
// 		handleChampionPopup={this.handleChampionPopup}
// 		champion={v[1]}
// 	/>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ChampionPage from './pages/Champion';

export default function App() {
	return (
		<Router>
			<div className='app-wrapper'>
				<Route exact path='/' component={HomePage} />
				<Route path='/champion/:id' component={ChampionPage} />
			</div>
		</Router>
	);
}
