import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button , Icon , Popup} from "semantic-ui-react"


class TypeSelectionComponent extends Component {
	renderButtons(buttons) {
		return buttons.map(btn => {
			return (
				<Button key={btn.id}
					id="typeselect"
					color={this.props.type === btn.id ? "blue" : "grey"}
					disabled={btn.disabled}
					size="medium"
					onClick={() => this.props.onClick(btn.id)}>

					{btn.icon ? <Icon name={btn.icon}/> : null}
					{btn.btnText}

				</Button>
			)
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
		} else {
			return <Button disabled>OK</Button>
		}
	}

	render() {
		return (
			<div className="TypeSelectionComponent">
				{this.renderButtons(this.props.buttons)}
				<div className={style.description}>
					<p className={style.descriptionText}>{this.renderDescription(this.props.buttons)}</p>
				</div>

				{/*
				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>
			*/}

			</div>
		)
	}
}

export default TypeSelectionComponent
