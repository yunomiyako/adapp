import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button } from "semantic-ui-react"

//TODO : なんか違うんだよなあ・・・
function renderNewLine(text) {
	return text.split("\n").map(m => (<p key={m}>{m}</p>))
}


class TypeSelectionComponent extends Component {

	//TODO: 拡張性がなさすぎる
	renderButtons(buttons) {
		return buttons.map(btn => {
			if(this.props.type === btn.id) {
				return (<div key={btn.id} className={"TypeButton" + (btn.id+1)}>
					<Button disabled key={btn.id}  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
				</div>)
			} else {
				return (<div key={btn.id} className={"TypeButton" + (btn.id+1)}>
					<Button key={btn.id}  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
				</div>)
			}
		}
		)
	}

	renderDescription(buttons) {
		if(this.props.type !== -1) {
			return buttons[this.props.type].description
		}
	}

	renderOkButton() {
		if(this.props.type !== -1) {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		}
	}

	render() {
		return (
			<div className="TypeSelectionComponent">
				<div className={style.gridContainer}>

					{this.renderButtons(this.props.buttons)}

					<div className={style.description}>
						<p className={style.descriptionText}>{this.renderDescription(this.props.buttons)}</p>
					</div>

					<div className={style.okButtonArea}>
						<div className={style.okButton}>
							{this.renderOkButton()}
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default TypeSelectionComponent
