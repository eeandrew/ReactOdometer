import React from 'react';
import ReactDom from 'react-dom';

export default class RunningNumber extends React.Component {

	componentDidMount() {
		if(Odometer) {
			this.odometer = this.getNewOdometer();

			this.rAF(this.updateValue.bind(this));
		}
	}

	getNewOdometer(format) {
		return  new Odometer({
				el : ReactDom.findDOMNode(this),
				value : 0,
				theme: this.props.theme,
				format : format || this.props.format,
				duration : this.props.duration,
			});
	}

	rAF(callback) {
		let onNextFrame = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
		return onNextFrame(callback)
	}

	updateValue() {
		this.odometer.update(this.props.value);
	}

	componentDidUpdate() {
		if(this.odometer) {
			this.rAF(this.updateValue.bind(this));
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.format !== nextProps.format) {
			ReactDom.findDOMNode(this).removeChild(ReactDom.findDOMNode(this).lastChild)
			ReactDom.findDOMNode(this).odometer = null;
			this.odometer = this.getNewOdometer(nextProps.format);
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
	duration : 1000,
}