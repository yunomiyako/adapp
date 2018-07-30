import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button , Checkbox , Form} from "semantic-ui-react"

//component
import TwitterLikeComponent from "./TwitterLikeComponent"

// immutable state change helper
var dotProp = require("dot-prop-immutable")


class RetweetAdCreate extends Component {
	renderOkButton() {
		if(true) {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		}
	}

	onToggled() {
		const newObj = dotProp.set(this.props.adObject , "isNewlyCreated" , !this.props.adObject.isNewlyCreated)
		this.props.onChangeAdObject(newObj)
	}

	renderCreate() {
		const isNewly = this.props.adObject.isNewlyCreated
		if(isNewly) {
			return (<TwitterLikeComponent
				adObject = {this.props.adObject}
				onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
			/>)
		} else {
			return (
				<Form>
					<Form.Field>
						<label>リツイートしてもらいたいツイートのURL</label>
						<input placeholder='https://twitter.com/hashimoto_lo/status/340640143058825216' />
					</Form.Field>
					<Button type='決定'>Submit</Button>
				</Form>
			)
		}
	}

	//TODO : 実際の広告画面と全く同じものをだす
	render() {
		return (
			<div className="RetweetAdCreate">
				<Checkbox label='新規にツイートを作る' checked={this.props.adObject.isNewlyCreated} onChange={() => this.onToggled()} />

				{this.renderCreate()}

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default RetweetAdCreate