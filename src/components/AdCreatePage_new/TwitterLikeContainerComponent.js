import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button} from "semantic-ui-react"

import TwitterLikeComponent from "./TwitterLikeComponent"

class TwitterLikeContainerComponent extends Component {
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

	onChangeAdObject = (obj) => {
		this.props.onChangeAdObject(obj)
	}

	render() {
		return (
			<div className="TwitterLikeContainerComponent">
				<TwitterLikeComponent
					adObject = {this.props.adObject}
					onChangeAdObject = {this.onChangeAdObject}
					insertDefaultMessage = {true}
				/>
			</div>
		)
	}
}

export default TwitterLikeContainerComponent
