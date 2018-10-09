import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Form} from "semantic-ui-react"

//component
import TwitterLikeComponent from "./TwitterLikeComponent"
import TwitterLikeView from "../CommonSemanticUI/TwitterLikeView"
import UploaderWithSlider from "./UploaderWithSlider"

import getGoogTwitterUrl from "../../Utils/getGoogTwitterUrl"
import getTweetIdFromUrl from "../../Utils/getTweetIdFromUrl"

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
		for(key of keys2) {
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

	onChangeAdObject = (obj) => {
		this.props.onChangeAdObject(obj)
	}

	onToggled = () => {
		const newObj = dotProp.set(this.props.adObject , "isNewlyCreated" , !this.props.adObject.isNewlyCreated)
		this.props.onChangeAdObject(newObj)
	}

	onChangeUrl = (event) => {
		const url = event.target.value
		const goodUrl = getGoogTwitterUrl(url)
		const newObj = dotProp.set(this.props.adObject , "tweetUrl" , goodUrl)
		this.props.onChangeAdObject(newObj)

		//url check
		const id_tweet = getTweetIdFromUrl(url)
		if(id_tweet) {	
			this.props.onFetchTweetDetail(id_tweet)
		}
	}


	renderTwitterLikeView() {
		console.log("active = " + this.props.tweetObjectLoading)
		console.log(this.props.tweetObject)
		if(this.props.adObject.tweetUrl){
			return <TwitterLikeView
			active={this.props.tweetObjectLoading}
			tweetObject = {this.props.tweetObject}
			/>
		}
	}

	onChangePictures = (pictures) => {
		const newObj = dotProp.set(this.props.adObject , "images" , pictures)
		this.props.onChangeAdObject(newObj)
	}


	renderCreate() {
		//const isNewly = this.props.adObject.isNewlyCreated
		const isNewly = false //強制的にURL入力
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
								value = {this.props.adObject.tweetUrl}
								onChange = {this.onChangeUrl}
								placeholder='https://twitter.com/hashimoto_lo/status/340640143058825216' />
						</Form.Field>
					</Form>
					{this.renderTwitterLikeView()}
				<div className={style.center}>
					<UploaderWithSlider
					pictures = {this.props.adObject.images}
					id="retweet"
					onChangePictures={this.onChangePictures}
					maxNum={1}
					/>
				 </div>
				</div>
			)
		}
	}

	render() {
		return (
			<div className={style.RetweetAdCreate}>
				{/* <div className={style.RetweetAdCreateCheckBox}>
					<Checkbox label='新規にツイートを作る' checked={this.props.adObject.isNewlyCreated} onChange={this.onToggled} />
				</div> */}
				{this.renderCreate()}
			</div>
		)
	}
}

export default RetweetAdCreate
