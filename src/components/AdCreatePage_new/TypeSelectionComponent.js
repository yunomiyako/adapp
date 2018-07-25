import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button , Grid , Image} from "semantic-ui-react"

//TODO : なんか違うんだよなあ・・・
function renderNewLine(text) {
	return text.split("\n").map(m => (<p key={m}>{m}</p>))
}


class TypeSelectionComponent extends Component {

	renderButtons(buttons) {
		return buttons.map(btn => {
			if(this.props.type === btn.id) {
				return (
					<Grid.Column key={btn.id} style={{textAlign : "center"}}>
						<Button disabled size="mini" key={btn.id}  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
					</Grid.Column>
				)
			} else {
				return (
					<Grid.Column key={btn.id} style={{textAlign : "center"}}>
						<Button size="mini" key={btn.id}  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
					</Grid.Column>)
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
				<Grid>
					<Grid.Row centered columns={this.props.buttons.length}>
						{this.renderButtons(this.props.buttons)}
					</Grid.Row>
				</Grid>

				<div className={style.description}>
					<p className={style.descriptionText}>{this.renderDescription(this.props.buttons)}</p>
				</div>


				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default TypeSelectionComponent
