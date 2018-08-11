import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button} from "semantic-ui-react"

import TwitterLikeComponent from "./TwitterLikeComponent"

class TwitterLikeContainerComponent extends Component {
	renderOkButton() {
		if(this.props.adObject.text !== "") {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	render() {
		return (
			<div className="TwitterLikeContainerComponent">
				<TwitterLikeComponent
					adObject = {this.props.adObject}
					onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
				/>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default TwitterLikeContainerComponent
