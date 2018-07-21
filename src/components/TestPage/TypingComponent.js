import React , {Component}  from "react"
import {  } from "semantic-ui-react"


const questions = [
	{
		sentence : "これはタイピングゲームです",
		eng : "korehataipinguge-mudesu"
	} ,
	{
		sentence : "二問目だよー",
		eng : "2monmedayo-"
	} ,
	{
		sentence : "明日は晴れますように",
		eng : "ashitahaharemasuyouni"
	}
]
class TypingComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text : "",
			sentence : questions[0].sentence,
			eng : questions[0].eng,
			index: 0,
			question : 0,
			count :0
		}
	}

	renderText() {
		return <div><span className="correctString"> {this.state.eng.substr( 0, this.state.index )}</span>
			<span>{ this.state.eng.substr( this.state.index, this.state.eng.length -  this.state.index)}</span></div>
	}

	onKeyPressed(e) {
		if(this.state.eng[this.state.index] === e.key) {
			this.setState({index : this.state.index + 1})
			this.setState({count : this.state.count + 1})
		}


		if(this.state.index === this.state.eng.length) {
			this.setState({question : this.state.question + 1})
			this.setState({index : 0})
			this.setState({sentence : questions[this.state.question ].sentence})
			this.setState({eng : questions[this.state.question ].eng})
		}

		if(this.state.question === questions.length  ) {
			this.setState({question : 0})
			this.setState({index : 0})
			this.setState({sentence : questions[0].sentence})
			this.setState({eng : questions[0].eng})
		}
	}

	addSushi() {
		return "🍣".repeat(this.state.count + 1)
	}

	render() {
		return (
			<div className="TypingComponent"
				onKeyDown={(e) => this.onKeyPressed(e)}
				tabIndex="0">
				<h1>{this.addSushi()}</h1>
				<h1>{this.state.sentence}</h1>
				<h1>{this.renderText()}</h1>

				<style jsx>{`
					.TypingComponent {
						background:white;
					}
					.correctString {
						color:red;
					}
					`}
				</style>
			</div>


		)
	}
}

export default TypingComponent
