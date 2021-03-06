import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button , Icon } from "semantic-ui-react"


class TypeSelectionComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key2 of keys2) {
			if (nextState[key2] !== this.props[key2]) {
				return true
			}
		}
		return false
	}


	onClick = (id) => {
		this.props.onClick(id)
	}

	renderButtons(buttons) {
		return buttons.map(btn => {
			const disabledFlag = btn.needLogin && !this.props.isLogin
			return (
				<div key={btn.id}>
					<Button 
						fluid
						id="typeselect"
						color={this.props.type === btn.id ? "blue" : "grey"}
						disabled={btn.disabled || disabledFlag}
						size="medium"
						onClick={() => this.onClick(btn.id)}>
						{btn.icon ? <Icon name={btn.icon}/> : null}
						{btn.btnText}
					</Button>
					<div className={style.description}>
						<p className={style.descriptionText}>{this.renderDescription(btn)}</p>
					</div>
				</div>
			)
		}
		)
	}

	renderDescription(button) {
		if(this.props.type !== "") {
			if(button.id === this.props.type) {
				return button.description
			}
		}
	}


	render() {
		return (
			<div className="TypeSelectionComponent">
				{this.renderButtons(this.props.buttons)}
			</div>
		)
	}
}

export default TypeSelectionComponent
