import ReactDom from 'react-dom';
import React from 'react';
import RunningNumber from './RunningNumber.jsx';
import './main.css';

class TestRunningNumber extends React.Component {
	constructor() {
		super();
		this.state = {
			value:999,
			format:'(d dd)',
		};
	}

	handleValueChange(e) {
		this.setState({
			value : parseInt(e.target.value) || 0
		});
	}

	handleFormatChange(e) {
		this.setState({
			format : e.target.value
		});
	}


	render() {
		let ctrlStyle = {
			marginTop : '30px',
			textAlign : 'center'
		}
		return (
			<div>
				<div style={ctrlStyle}>
					<span>Change Value</span> <input value={this.state.value} onChange={this.handleValueChange.bind(this)}/>
				</div>
				<div style={ctrlStyle}>
					<span>Change Format</span><input value={this.state.format}  onChange={this.handleFormatChange.bind(this)}/>
				</div>
				<div style={ctrlStyle}>
					<RunningNumber rnStyle="my-running-number odometer odometer-theme-default" value={this.state.value} format={this.state.format}/>
				</div>
			</div>
		);
	}
}

ReactDom.render(<TestRunningNumber/>,document.getElementById('app'))