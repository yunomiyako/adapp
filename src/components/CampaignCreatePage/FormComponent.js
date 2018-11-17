import React , {Component} from "react"
import { Form } from "semantic-ui-react"
import style from "./CampaignCreatePage.css"

const options = [
	{ key: "m", text: "Male", value: "male" },
	{ key: "f", text: "Female", value: "female" },
]
class FormComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key2 of keys2) {
			if (nextState[key2] !== this.props[key2]) {
				return true
			}
		}
		return false
	}

	render() {
		return (
			<div className={style.FormComponent}>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input 
							value = {this.props.name}
							onChange = {(event) => this.props.onChangeName(event.target.value) }
							fluid label='お名前' placeholder='名前' />
						<Form.Input 
							value = {this.props.email}
							onChange = {(event) => this.props.onChangeEmail(event.target.value) }
							fluid label='メールアドレス(返信用)' placeholder='メールアドレス' />
					</Form.Group>
					<Form.TextArea 
						value = {this.props.notes}
						onChange = {(event) => this.props.onChangeNotes(event.target.value) }
					
						label='備考欄' placeholder='不明点やご要望をお書きください' />
					<Form.Button>送信</Form.Button>
				</Form>
			</div>
		)
	}
}

export default FormComponent
