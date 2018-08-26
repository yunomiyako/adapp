import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button , Icon , Popup} from "semantic-ui-react"


class TypeSelectionComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}


	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

	onClick = (id) => {
		this.props.onClick(id)
	}

	renderButtons(buttons) {
		return buttons.map(btn => {
			return (
				<Button key={btn.id}
					id="typeselect"
					color={this.props.type === btn.id ? "blue" : "grey"}
					disabled={btn.disabled}
					size="medium"
					onClick={() => this.onClick(btn.id)}>

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


	render() {
		return (
			<div className="TypeSelectionComponent">
				{this.renderButtons(this.props.buttons)}
				<div className={style.description}>
					<p className={style.descriptionText}>{this.renderDescription(this.props.buttons)}</p>
				</div>

			</div>
		)
	}
}

export default TypeSelectionComponent
