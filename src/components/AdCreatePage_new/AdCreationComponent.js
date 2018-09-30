import React , {Component} from "react"
import { Icon, Label , Button } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components
import TitleCreateComponent from "./TitleCreateComponent"
import TwitterLikeContainerComponent from "./TwitterLikeContainerComponent"
import OnlyLookAdCreate from "./OnlyLookAdCreate"
import TypeSelectionComponent from "./TypeSelectionComponent"
import RetweetAdCreate from "./RetweetAdCreate"

//data
import adTypeButtons from "../../domain/adTypeButtons"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class AdCreationComponent extends Component {
	constructor(props) {
		super(props)
		this.HeadIcon = <Icon name="angle right"/>
	}

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
	componentDidUpdate(prevProps , prevState){
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
		//validate
		this.props.onChangeAdCreateCompleted(true)
		this.props.onChangeIndex(1)
	}

	onChangeAdType = (id) =>{
		this.props.onChangeAdType(id)
	}

	renderTypeSelectionComponent() {
		return (
			<div>
				<h3 className="AdCreatePage-Title">{this.HeadIcon}してもらいたいことを選んでください</h3>
				<TypeSelectionComponent
					onClick={this.onChangeAdType}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent() {
		if(this.props.adType !== "") {
			return(
				<React.Fragment>
			  <h3 className="AdCreatePage-Title">{this.HeadIcon}宣伝タイトル</h3>
					<TitleCreateComponent
						title = {this.props.title}
						adType = {this.props.adType}
						returnDescription = {this.props.returnDescription}
						onChangeTitle = {this.onChangeTitle}
						onChangeReturnDescription = {this.onChangeReturnDescription}
					></TitleCreateComponent>
					{this.props.title ? "" : <Label pointing color="orange">タイトルは上の例から選ぶことができるよ！</Label>}
				</React.Fragment>)
		}
	}

	onChangeAdObject = (obj) => {
		this.props.onChangeAdObject(obj)
	}

	onChangeTitle = (text) => {
		this.props.onChangeTitle(text)
	}

	onChangeReturnDescription = (text) => {
		this.props.onChangeReturnDescription(text)
	}

	onFetchTweetDetail = (id_tweet) => {
		this.props.onFetchTweetDetail(id_tweet)
	}

	favOrRetweetDescriptionLabel(action = "いいね") {
		if(this.props.adObject.tweetUrl && this.props.adObject.text) {
			if(this.props.adObject.images.length == 0) {
				return <Label pointing color="orange">トップ画像を１枚設定できます(ツイート内で使用している画像など)</Label>
			} else {
				return 
			}
		} else {
			return (<Label pointing color="orange">{action}してほしいツイートのURLをコピペしてください</Label>)
		}
	}

	renderCreateAdChild(adType) {
		switch(adType) {
		case "tweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}どんなツイートをしてもらいたいですか？</h3>
					<TwitterLikeContainerComponent
						adObject = {this.props.adObject}
						onChangeAdObject = {this.onChangeAdObject}
					/>
					<Label pointing color="orange">ツイート部分をタップすると編集できるよ！</Label>
				</div>)
		case "retweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}リツイートして欲しいツイートを選択or作成</h3>
					<RetweetAdCreate
						tweetObject = {this.props.tweetObject}
						adObject = {this.props.adObject}
						onChangeAdObject = {this.onChangeAdObject}
						onFetchTweetDetail = {this.onFetchTweetDetail}
						tweetObjectLoading={this.props.tweetObjectLoading}
					/>
					<Label pointing color="orange">リツイートしてほしいツイートのURLをコピペしてください</Label>
				</div>
			)
		case "lookMe" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}何を見て欲しいですか？</h3>
					<OnlyLookAdCreate
						adObject = {this.props.adObject}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onChangeAdObject = {this.onChangeAdObject}
						
					/>
					{this.props.adObject.text ? "" : <Label pointing color="orange">画像とテキストで見てほしいことを説明しよう</Label>}
				</div>)
		case "fav" :	return (
			<div>
				<h3 className="AdCreatePage-Title">{this.HeadIcon}いいねして欲しいツイートを選択or作成</h3>
				<RetweetAdCreate
					tweetObject = {this.props.tweetObject}
					adObject = {this.props.adObject}
					onChangeAdObject = {this.onChangeAdObject}
					onFetchTweetDetail = {this.onFetchTweetDetail}
					tweetObjectLoading={this.props.tweetObjectLoading}
				/>
				{this.favOrRetweetDescriptionLabel()}
				
			</div>)
		case "follow" :	return (
			<div>
				<h3 className="AdCreatePage-Title">{this.HeadIcon}フォローしてもらいたい旨を書こう！</h3>
				<OnlyLookAdCreate
					adObject = {this.props.adObject}
					title = {this.props.title}
					returnDescription = {this.props.returnDescription}
					onChangeAdObject = {this.onChangeAdObject}
				/>
				{this.props.adObject.text ? "" : <Label pointing color="orange">自己紹介や普段のツイートを紹介しよう！</Label>}
			</div>)
		default : return (
			<div>
			</div>
		)
		}
	}

	renderOkButton = () => {
		const flag = this.props.title && this.props.adObject.text
		const flag2 = this.props.title && this.props.tweetObject.text 
		if(flag || flag2) {
			return (
				<React.Fragment>
					<Label pointing="right" color="orange">お返しの設定へ</Label>	
					<Button onClick={this.onClickOk}>OK</Button>
				</React.Fragment>
			)

		} else {
			return <Button disabled>OK</Button>
		}
	}

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div className={style.tateMargin}>
					{this.renderTypeSelectionComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderTitleCreateComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderCreateAdChild(this.props.adType)}
				</div>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>
			</div>
		)
	}
}

export default AdCreationComponent
