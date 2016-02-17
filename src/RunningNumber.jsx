import React from 'react';
import ReactDom from 'react-dom';

export default class RunningNumber extends React.Component {

	componentDidMount() {
		if(Odometer) {
			this.odometer = this.getNewOdometer();

			this.rAF(this.updateValue.bind(this));
		}
	}

	getNewOdometer() {
		return  new Odometer({
				el : ReactDom.findDOMNode(this),
				value : 0,
				theme: this.props.theme,
				format : this.props.format,
				duration : this.props.duration,
			});
	}

	rAF(callback) {
		return window.requestAnimationFrame(callback) || window.setTimeout(callback,1)
	}

	updateValue() {
		this.odometer.update(this.props.value);
	}

	componentDidUpdate() {
		if(this.odometer) {
			this.rAF(this.updateValue.bind(this));
		}
	}

	render() {
		return <span className={this.props.rnStyle}/>
	}
} 

RunningNumber.propTypes = {
	value : React.PropTypes.number.isRequired,
	format : React.PropTypes.string,
	theme : React.PropTypes.string,
	rnStyle : React.PropTypes.string,
	duration : React.PropTypes.number,
}

RunningNumber.defaultProps = {
	value : 0,
	format : 'd',
	theme : 'default',
	rnStyle : '',
	duration : 10000,
}