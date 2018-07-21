import React , {Component}  from "react"
import "./AdCreatePage.css"

//Semantic UI
import {  } from "semantic-ui-react"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"
import ReturnSelection from "./ReturnSelectionComponent"
import ReturnCreate from "./ReturnCreateComponent"

import TypeSelectionComponent from "./TypeSelectionComponent"


//TODO : 説明もっとわかりやすく
const adTypeButtons = [{id : 0 , btnText : "ツイート\nしてもらう" , description : "あなたが宣伝してほしいことをツイートしてもらいます。"} ,
	{id : 1 , btnText : "リツイート\nしてもらう" , description : "宣伝してほしいツイートをリツイートしてもらいます。"} ,
	{id : 2 , btnText : "見てもらう\n　" , description : "ただ見てほしい文章と画像を設定します。"}  ]
class AdCreatePage extends Component {

	onClickOk() {
		window.console.log("次へ")
	}

	render() {
		const frameStyle = {
			height : "auto" ,
			width  : "auto" ,
			maxWidth : "500px"
		}

		return (
			<div className="AdCreatePage">
				<div className="ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">してもらいたいことを選んでください</h1>
					<TypeSelectionComponent
						onClick={(id) => this.props.onChangeAdType(id)}
						onClickOk = {() => this.onClickOk()}
						type = {this.props.adType}
						buttons = {adTypeButtons}
					/>
				</div>

				<style jsx>{`
					.ComponentFrame {
						background:#00b894;
						-webkit-border-radius: 10px 10px 10px 10px;
						border-radius: 10px 10px 10px 10px;
						padding:10px;
						margin: 0 auto;
					}
					`}</style>
			</div>
		)
	}
}

export default AdCreatePage
