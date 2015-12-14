import React, { Component } from 'react';

class Text extends Component {
	componentDidMount() {
		
	}
	render() {
		return (<div />);
	}
};

Text.defaultProps = {
	text: '',
	textAlign: 'center',
	bottom: null, 
	top: 0,
	left: 0,
};

export default Text;