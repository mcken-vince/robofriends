import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots'; // import robots from 'robots.js'
import './app.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode/com/users')
		// .then(response => response.json())
		// .then(users => {
			this.setState({ robots: robots}) //swap to robots: users for json users file
		// })
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ? // if no robots:
			<h1>It looks like you have no robofriends... :(</h1> :
			(
				<div className='tc'>
					<h1>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;