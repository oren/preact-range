import { h, Component } from "preact"
import style from "./style"
import Range from "rc-slider/lib/Range"
import "rc-slider/assets/index.css"

function log(value) {
	console.log(value) //eslint-disable-line
}

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Monday</h1>
				<DynamicBounds />
			</div>
		)
	}
}

class DynamicBounds extends Component {
	constructor(props) {
		super(props)
		this.state = {
			min: 0,
			max: 23,
			range: [0, 0],
			vertical: true,
			marks: { 0: "8am", 1: "9am" }
		}
	}
	onSliderChange = value => {
		log(value)
		this.setState({ range: value })
	}
	onMinChange = e => {
		this.setState({
			min: +e.target.value || 0
		})
	}
	onMaxChange = e => {
		this.setState({
			max: +e.target.value || 23
		})
	}
	render() {
		return (
			<div>
				<label>Min: </label>
				<input
					type="number"
					value={this.state.min}
					onChange={this.onMinChange}
				/>
				<br />
				<label>Max: </label>
				<input
					type="number"
					value={this.state.max}
					onChange={this.onMaxChange}
				/>
				<br /><br />
				<span>{this.state.range[0]}</span>
				<span>{this.state.range[1]}</span>
				<br /><br />
				<Range
					defaultValue={[0, 0]}
					min={this.state.min}
					max={this.state.max}
					onChange={this.onSliderChange}
				/>
			</div>
		)
	}
}
