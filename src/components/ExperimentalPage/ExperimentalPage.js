import React , {Component}  from "react"
import style from "./ExperimentalPage.css"

//semantic UI
import {  } from "semantic-ui-react"
import HelmetCreator from "../../Utils/HelmetCreator"

class ExperimentalPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time : new Date()
		}
	}

	componentDidMount() {
		setInterval(() => {
			var jikan= new Date()
			this.setState({
				time : jikan
			})
		} , 500)
	}


	changeTitle() {
		
		//時・分・秒を取得する
		const jikan = this.state.time
		var hour = jikan.getHours()
		var minute = jikan.getMinutes()
		var second = jikan.getSeconds()
		console.log(second)

		const time = hour + "時" + minute +  "分" + second + "秒"
		return HelmetCreator(time)
	}


	render() {
		return (
			<div className="ExperimentalPage">
				{this.changeTitle()}
			</div>
		)
	}
}

export default ExperimentalPage
