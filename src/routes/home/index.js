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
		}
	}

	onSliderChange = value => {
		log(value)
		this.setState({ range: value })
	}

	render() {
		return (
			<div>
				<span>{this.state.range[0]}</span>
				<span>{this.state.range[1]}</span>
				<br /><br />
				<Range
					defaultValue={[7, 9]}
					min={this.state.min}
					max={this.state.max}
					onChange={this.onSliderChange}
          pushable
          allowCross={false}
          marks={{0: "12am", 7: "8am", 15: "4pm", 23: "11pm"}}
				/>
				<br /><br />
				<Range
					defaultValue={[10, 14]}
					min={this.state.min}
					max={this.state.max}
					onChange={this.onSliderChange}
          pushable
          allowCross={false}
          marks={{0: "12am", 7: "8am", 15: "4pm", 23: "11pm"}}
				/>
				<br /><br />
				<Range
					defaultValue={[15, 18]}
					min={this.state.min}
					max={this.state.max}
					onChange={this.onSliderChange}
          pushable
          allowCross={false}
          marks={{0: "12am", 7: "8am", 15: "4pm", 23: "11pm"}}
				/>
			</div>
		)
	}
}
