import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Button } from "semantic-ui-react"

//TODO : なんか違うんだよなあ・・・
function renderNewLine(text) {
	return text.split("\n").map(m => (<p key={m}>{m}</p>))
}

//TODO : 説明もっとわかりやすく
const buttons = [{id : 0 , btnText : "ツイート\nしてもらう" , description : "あなたが宣伝してほしいことをツイートしてもらいます。"} ,
	{id : 1 , btnText : "リツイート\nしてもらう" , description : "宣伝してほしいツイートをリツイートしてもらいます。"} ,
	{id : 2 , btnText : "見てもらう\n　" , description : "ただ見てほしい文章と画像を設定します。"}  ]
class TypeSelectionComponent extends Component {

	renderButtons(buttons) {
		return buttons.map(btn =>
			<div key={btn.id} className={"button" + (btn.id+1)}>
				<Button key={btn.id}  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
			</div>
		)
	}

	renderDescription(buttons) {
		if(this.props.adType !== -1) {
			return buttons[this.props.adType].description
		}
	}

	render() {
		return (
			<div className="TypeSelectionComponent">
				<div className="grid-container">

					{this.renderButtons(buttons)}

					<div className="description">
						<p className="description-text">{this.renderDescription(buttons)}</p>
					</div>

					<div className="okButtonArea">
						<div className="okButton">
							<Button>OK</Button>
						</div>
					</div>


					<style jsx>{`
						.description-text {
							color: white;
						}

						.grid-container {
						  display: grid;
						  height: 100%;
							gap: 20px 3px;
						  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
						  grid-template-rows: 1fr 1fr;
						  grid-template-areas: "button1 button1 button1 button2 button2 button2 button3 button3 button3" ". description description description description description description description okButtonArea";
						}

						.button1 {
						  grid-area: button1;
						}

						.button2 {
						  grid-area: button2;
						}

						.button3 {
						  grid-area: button3;
						}

						.description {
						  grid-area: description;
						}

						.okButtonArea {
						  display: grid;
						  grid-area: okButtonArea;
						  grid-template-columns: 1fr 1fr;
						  grid-template-rows: 1fr 1fr;
						  grid-template-areas: ". ." ". okButton";
						}

						.okButton {
						  grid-area: okButton;
						}
						`}</style>

				</div>
			</div>
		)
	}
}

export default TypeSelectionComponent
