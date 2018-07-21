import React , {Component}  from "react"
import { Button } from "semantic-ui-react"
import "./TestPage.css"


class TestIconComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index : 0
		}
	}

	onClickIcon(){
		if(this.state.index >= this.props.icons.length - 1){
			this.setState({index : 0})
		} else {
			this.setState({index : this.state.index + 1})
		}
	}

	render() {
		return (
			<div className="TestIconComponent">
				<div className="TestIconComponent-frame">
					<p className="TestPage-icon TestPage-icon-clicked">{this.props.icons[this.state.index]}</p>
					<Button onClick={() => this.onClickIcon()} className="TestIconComponent-Button">更新</Button>
				</div>
			</div>
		)
	}
}

export default TestIconComponent
