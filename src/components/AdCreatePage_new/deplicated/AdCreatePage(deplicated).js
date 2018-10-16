import React , {Component}  from "react"
import style from "./AdCreatePage.css"
import style2 from "./Animation.css"

//Semantic UI
import { Button } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"


// Components
import TitleCreateComponent from "../TitleCreateComponent"
import TwitterLikeContainerComponent from "../TwitterLikeContainerComponent"
import OnlyLookAdCreate from "../OnlyLookAdCreate"
import TypeSelectionComponent from "../TypeSelectionComponent"
import ReturnCreateComponent from "../ReturnCreateComponent"
import RetweetAdCreate from "../RetweetAdCreate"
import StepComponent from "../StepComponent"

import AdImageUploader from "./AdImageUploader"

//data
import adTypeButtons from "../../../domain/adTypeButtons"
import returnTypeButtons from "../../../domain/returnTypeButtons"

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
		if (this.props.index < 100) {
			this.props.onChangeIndex( Math.max(this.props.index , NO + 1))
		} else {
			this.props.onChangeIndex(0)
		}
	}

	renderTypeSelectionComponent(NO) {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<h1 className="AdCreatePage-Title">してもらいたいことを選んでください</h1>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeAdType(id)}
					onClickOk = {() => this.onClickOk(NO)}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent(NO) {
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame">
					<h1 className="AdCreatePage-Title">タイトルをつけよう</h1>
					<TitleCreateComponent
						onClickOk = {() => this.onClickOk(NO)}
						title = {this.props.title}
						adType = {this.props.adType}
						returnDescription = {this.props.returnDescription}
						onChangeTitle = {(title) => this.props.onChangeTitle(title)}
						onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
					></TitleCreateComponent>
				</div>
			</CSSTransition>)
	}

	renderCreateAd(NO) {
		const returnChild = (adType , children) => {

			switch(adType) {
			case "tweet" :
				return (
					<div className="AdCreatePage-ComponentFrame">
						{children}
						<h3 className="AdCreatePage-Title">どんなツイートをしてもらいたいですか？</h3>
						<TwitterLikeContainerComponent
							adObject = {this.props.adObject}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>)
			case "retweet" :
				return (
					<div className="AdCreatePage-ComponentFrame">
						{children}
						<h3 className="AdCreatePage-Title">リツイートして欲しいツイートを選択or作成</h3>
						<RetweetAdCreate
							adObject = {this.props.adObject}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>
				)
			case "lookMe" :
				return (
					<div className="AdCreatePage-ComponentFrame">
						{children}
						<h3 className="AdCreatePage-Title">何を見て欲しいですか？</h3>


						<OnlyLookAdCreate
							adObject = {this.props.adObject}
							title = {this.props.title}
							returnDescription = {this.props.returnDescription}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>)
			case "fav" :	return (
				<div className="AdCreatePage-ComponentFrame">
					{children}
					<h3 className="AdCreatePage-Title">いいねして欲しいツイートを選択or作成</h3>
					<RetweetAdCreate
						adObject = {this.props.adObject}
						onClickOk = {() => this.onClickOk(NO)}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
			case "follow" :	return (
				<div className="AdCreatePage-ComponentFrame">
					{children}
					<h3 className="AdCreatePage-Title">フォローしてもらいたい旨を書こう！</h3>
					<OnlyLookAdCreate
						adObject = {this.props.adObject}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onClickOk = {() => this.onClickOk(NO)}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
			default : return <div/>
			}
		}

		const title = <TitleCreateComponent
			onClickOk = {() => this.onClickOk(NO)}
			title = {this.props.title}
			adType = {this.props.adType}
			returnDescription = {this.props.returnDescription}
			onChangeTitle = {(title) => this.props.onChangeTitle(title)}
			onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
		></TitleCreateComponent>
		return (
			<React.Fragment>
				<CSSTransition
					in = {this.props.index >= NO}
					classNames="AdCreateAnimation "
					timeout = {1000}
					unmountOnExit
				>
					{returnChild(this.props.adType , title)}
				</CSSTransition>
			</React.Fragment>
		)
	}

	renderReturnTypeSelectionComponent(NO) {
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame">
					<h1 className="AdCreatePage-Title">お返しはどのタイプですか？</h1>
					<TypeSelectionComponent
						onClick={(id) => this.props.onChangeReturnType(id)}
						onClickOk = {() => this.onClickOk(NO)}
						type = {this.props.returnType}
						buttons = {returnTypeButtons}
					/>
				</div>
			</CSSTransition>)
	}

	renderReturnCreateComponent(NO) {
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame">
					<h1 className="AdCreatePage-Title">お返しを作成</h1>
					<ReturnCreateComponent
						returnObject = {this.props.returnObject}
						returnType = {this.props.returnType}
						returnObject = {this.props.returnObject}
						onChangeReturnObject = {(obj) => this.props.onChangeReturnObject(obj)}
					></ReturnCreateComponent>
				</div>
			</CSSTransition>)
	}

	render() {

		return (
			<div className="AdCreatePage" >

				<StepComponent/>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderTypeSelectionComponent(1)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderCreateAd(2)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderReturnTypeSelectionComponent(3)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderReturnCreateComponent(4)}
				</div>
			</div>
		)
	}
}

export default AdCreatePage
