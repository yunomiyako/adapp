import React , {Component}  from "react"
import "./TestPage.css"
import TypingComponent from "./TypingComponent"

import {Api} from "../../api/Api"
import { Button , Form , Image , List } from "semantic-ui-react"


class TestPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			array : [] ,
			text : ""
		}
	}

	onClickButton() {
		Api.fetchDynamoTest().then((array) => {
			console.log(array)
			return this.setState({array:array})})
	}

	renderArray() {
		return this.state.array.map((d) => {
			return (
				<List.Item key={d.id}>
					<Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
					<List.Content >
						<List.Header>{d.username}</List.Header>
					</List.Content>
				</List.Item>)
		})
	}

	renderList() {
		return (<List selection verticalAlign='middle'>
			{this.renderArray()}
		</List>)
	}

	onChangeText(text) {
		this.setState({
			text
		})
	}

	onClickSubmit() {
		Api.postDynamoTest(this.state.text).then(() => this.onClickButton())

	}

	onClicktest() {
		Api.testtm(this.state.text).then(() => this.onClickButton())
	}

	render() {
		return (
			<div className="TestPage">
				<div className="TestPage-icon-wrapper">
					<div/>
					<TypingComponent/>
					<Button onClick={() => this.onClickButton()}>test</Button>

					<Form>
						<Form.Field>
							<label>User Name</label>
							<input placeholder='User Name' onChange={(e) => this.onChangeText(e.target.value)}/>
						</Form.Field>
						<Button onClick={()=>this.onClickSubmit()}>Submit</Button>
						<Button onClick={()=>this.onClicktest()}>ttttttt</Button>
					</Form>

					{this.renderList()}
				</div>
			</div>
		)
	}
}

export default TestPage
