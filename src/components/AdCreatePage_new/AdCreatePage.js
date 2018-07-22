import React , {Component}  from "react"
import "./AdCreatePage.css"
import "./Animation.css"

//Semantic UI
import {  } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"


// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"
import ReturnSelection from "./ReturnSelectionComponent"
import ReturnCreate from "./ReturnCreateComponent"

import TypeSelectionComponent from "./TypeSelectionComponent"

//いちいちアニメーション出すのがだるいため
const debugMode = false
//TODO : 説明もっとわかりやすく
const adTypeButtons = [{id : 0 , btnText : "ツイート\nしてもらう" , description : "あなたが宣伝してほしいことをツイートしてもらいます。"} ,
	{id : 1 , btnText : "リツイート\nしてもらう" , description : "宣伝してほしいツイートをリツイートしてもらいます。"} ,
	{id : 2 , btnText : "見てもらう\n　" , description : "ただ見てほしい文章と画像を設定します。"}  ]
class AdCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index : debugMode ? 100000 : 0
		}
	}

	onClickOk(NO) {
		//TODO : もっと賢く
		if (this.state.index < 3) {
			this.setState({index : NO + 1})
		} else {
			this.setState({index : 0})
		}
	}

	renderTypeSelectionComponent() {
		const frameStyle = {background:"#00b894"}
		const NO = 1
		return (
			<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
				<h1 className="AdCreatePage-Title">してもらいたいことを選んでください</h1>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeAdType(id)}
					onClickOk = {() => this.onClickOk(NO)}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent() {
		const frameStyle = {background:"#74b9ff"}
		const NO = 2
		return (
			<CSSTransition
				in = {this.state.index >= NO}
				classNames="AdCreateAnimation"
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">タイトルをつけよう</h1>
					<TitleCreateComponent
						onClickOk = {() => this.onClickOk(NO)}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onChangeTitle = {(title) => this.props.onChangeTitle(title)}
						onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
					></TitleCreateComponent>
				</div>

			</CSSTransition>)
	}

	render() {
		return (
			<div className="AdCreatePage">



				{this.renderTypeSelectionComponent()}

				{this.renderTitleCreateComponent()}

			</div>
		)
	}
}

export default AdCreatePage
