import React from 'react';
import './Hello.css';

class Hello extends React.Component {
	render() {
		return (
			<div className='f1 tc'>
				<h1>Hello World</h1>
				<button className='f3'>Clickety Click</button>
				<p>{this.props.greeting}</p>
			</div>
		);
	}
}

export default Hello;