import React , {Component}  from "react"
import style from "./AdCreatePage.css"
import style2 from "./Animation.css"

//Semantic UI
import { Button } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"


// Components
import TitleCreateComponent from "./TitleCreateComponent"
import TwitterLikeContainerComponent from "./TwitterLikeContainerComponent"
import OnlyLookAdCreate from "./OnlyLookAdCreate"
import TypeSelectionComponent from "./TypeSelectionComponent"
import ReturnCreateComponent from "./ReturnCreateComponent"
import RetweetAdCreate from "./RetweetAdCreate"
import StepComponent from "./StepComponent"

import AdImageUploader from "./AdImageUploader"

//data
import adTypeButtons from "../../domain/adTypeButtons"
import returnTypeButtons from "../../domain/returnTypeButtons"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class AdCreatePage extends Component {
	constructor(props) {
		super(props)
		//画像は初期化
		this.props.onChangeAdObject(dotProp.set(this.props.adObject , "images" , []))
		this.props.onChangeReturnObject(dotProp.set(this.props.returnObject , "images" , []))
	}

	onChangePictures(pictures) {
		const newObj = dotProp.set(this.props.adObject , "images" , pictures)
		this.props.onChangeAdObject(newObj)
	}

	onClickOk(NO) {

		// console.log("NO : " + NO)
		// if (this.props.index < 100) {
		// 	this.props.onChangeIndex( Math.max(this.props.index , NO + 1))
		// } else {
		// 	this.props.onChangeIndex(0)
		// }
	}

	renderTypeSelectionComponent() {
		return (
			<div>
				<h3 className="AdCreatePage-Title">してもらいたいことを選んでください</h3>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeAdType(id)}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent() {
		if(this.props.adType !== "") {
			return(
				<TitleCreateComponent
					onClickOk = {() => this.onClickOk()}
					title = {this.props.title}
					adType = {this.props.adType}
					returnDescription = {this.props.returnDescription}
					onChangeTitle = {(title) => this.props.onChangeTitle(title)}
					onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
				></TitleCreateComponent>)
		}
	}

	renderCreateAdChild(adType) {
		switch(adType) {
		case "tweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">どんなツイートをしてもらいたいですか？</h3>
					<TwitterLikeContainerComponent
						adObject = {this.props.adObject}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
		case "retweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">リツイートして欲しいツイートを選択or作成</h3>
					<RetweetAdCreate
						adObject = {this.props.adObject}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>
			)
		case "lookMe" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">何を見て欲しいですか？</h3>
					<OnlyLookAdCreate
						adObject = {this.props.adObject}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
		case "fav" :	return (
			<div>
				<h3 className="AdCreatePage-Title">いいねして欲しいツイートを選択or作成</h3>
				<RetweetAdCreate
					adObject = {this.props.adObject}
					onClickOk = {() => this.onClickOk()}
					onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
				/>
			</div>)
		case "follow" :	return (
			<div>
				<h3 className="AdCreatePage-Title">フォローしてもらいたい旨を書こう！</h3>
				<OnlyLookAdCreate
					adObject = {this.props.adObject}
					title = {this.props.title}
					returnDescription = {this.props.returnDescription}
					onClickOk = {() => this.onClickOk()}
					onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
				/>
			</div>)
		default : return (
			<div>
			</div>
		)
		}
	}


	render() {

		return (
			<div className="AdCreatePage" >

				<StepComponent
					adCreateCompleted = {false}
					returnCreateCompleted = {false}
				/>

				<div className="AdCreatePageForPaddingFrame">
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

					</div>
				</div>
			</div>
		)
	}
}

export default AdCreatePage
