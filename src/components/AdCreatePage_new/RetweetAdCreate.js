import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button , Checkbox , Form} from "semantic-ui-react"

//component
import TwitterLikeComponent from "./TwitterLikeComponent"
import TwitterLikeView from "../CommonSemanticUI/TwitterLikeView"

// immutable state change helper
var dotProp = require("dot-prop-immutable")


class RetweetAdCreate extends Component {
	renderOkButton() {
		const flag_1 = !this.props.adObject.isNewlyCreated && this.props.adObject.tweetUrl
		const flag_2 = this.props.adObject.isNewlyCreated && this.props.adObject.text
		if(flag_1 || flag_2) {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	onToggled() {
		const newObj = dotProp.set(this.props.adObject , "isNewlyCreated" , !this.props.adObject.isNewlyCreated)
		this.props.onChangeAdObject(newObj)
	}

	onChangeUrl(url) {
		const newObj = dotProp.set(this.props.adObject , "tweetUrl" , url)
		this.props.onChangeAdObject(newObj)
	}


	renderTwitterLikeView() {
		if(this.props.adObject.tweetUrl){
			return <TwitterLikeView/>
		}
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
				<div className={style.RetweetAdCreateCheckBox}>
					<Form>
						<Form.Field>
							<label>リツイートしてもらいたいツイートのURL</label>
							<input
								onChange = {(event) => this.onChangeUrl(event.target.value)}
								placeholder='https://twitter.com/hashimoto_lo/status/340640143058825216' />
						</Form.Field>
					</Form>
					{this.renderTwitterLikeView()}
				</div>
			)
		}
	}

	render() {
		return (
			<div className={style.RetweetAdCreate}>
				<div className={style.RetweetAdCreateCheckBox}>
					<Checkbox label='新規にツイートを作る' checked={this.props.adObject.isNewlyCreated} onChange={() => this.onToggled()} />
				</div>
				{this.renderCreate()}

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default RetweetAdCreate
