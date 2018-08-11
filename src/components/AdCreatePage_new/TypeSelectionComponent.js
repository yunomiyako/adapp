import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button , Grid , Image} from "semantic-ui-react"

//TODO : なんか違うんだよなあ・・・
function renderNewLine(text) {
	return text.split("\n").map(m => (<p className={style.p_line} key={m}>{m}</p>))
}


class TypeSelectionComponent extends Component {

	renderButtons(buttons) {
		return buttons.map(btn => {
			console.log(btn.id)
			if(this.props.type === btn.id) {
				return (
					<Grid.Column key={btn.id + "grid"} style={{textAlign : "center"}}>
						<Button key={btn.id} color='blue' disabled={btn.disabled} size="small"  onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
					</Grid.Column>
				)
			} else {
				return (
					<Grid.Column key={btn.id + "grid"} style={{textAlign : "center"}}>
						<Button key={btn.id}  size="small" disabled={btn.disabled} onClick={() => this.props.onClick(btn.id)}>{renderNewLine(btn.btnText)}</Button>
					</Grid.Column>)
			}
		}
		)
	}

	renderDescription(buttons) {
		if(this.props.type !== "") {
			for(var i in buttons) {
				if(buttons[i].id == this.props.type) {
					return buttons[i].description
				}
			}
		}
	}

	renderOkButton() {
		if(this.props.type !== "") {
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
