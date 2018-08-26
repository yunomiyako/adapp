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
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}

	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

	onClickOk = () => {
		this.props.onClickOk()
	}

	onChangeAdObject = (obj) => {
		this.props.onChangeAdObject(obj)
	}

	renderOkButton() {
		const flag_1 = !this.props.adObject.isNewlyCreated && this.props.adObject.tweetUrl
		const flag_2 = this.props.adObject.isNewlyCreated && this.props.adObject.text
		if(flag_1 || flag_2) {
			return <Button onClick={this.onClickOk}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	onToggled = () => {
		const newObj = dotProp.set(this.props.adObject , "isNewlyCreated" , !this.props.adObject.isNewlyCreated)
		this.props.onChangeAdObject(newObj)
	}

	onChangeUrl = (event) => {
		const newObj = dotProp.set(this.props.adObject , "tweetUrl" , event.target.value)
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
				onChangeAdObject = {this.onChangeAdObject}
			/>)
		} else {
			return (
				<div className={style.RetweetAdCreateCheckBox}>
					<Form>
						<Form.Field>
							<label>リツイートしてもらいたいツイートのURL</label>
							<input
								onChange = {this.onChangeUrl}
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
					<Checkbox label='新規にツイートを作る' checked={this.props.adObject.isNewlyCreated} onChange={this.onToggled} />
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
