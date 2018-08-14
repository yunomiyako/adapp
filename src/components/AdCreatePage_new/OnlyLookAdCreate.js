import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button , Form , TextArea} from "semantic-ui-react"

import FeedComponent from "../AdPage_new/FeedComponent"
import AdImageUploader from "./AdImageUploader"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class OnlyLookAdCreate extends Component {
	renderOkButton() {
		if(this.props.adObject.text !== "") {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	renderAdContent() {
		return <FeedComponent
			title={this.props.title}
			username=""
			content={this.props.adObject.text}
		/>
	}

	onChangeText(text) {
		const newObj = dotProp.set(this.props.adObject , "text" , text)
		this.props.onChangeAdObject(newObj)
	}

	onChangePictures(pictures) {
		console.log(pictures)
	}

	render() {
		return (
			<div className="OnlyLookAdCreate">

				{this.renderAdContent()}

				<Form>
					<TextArea
						onChange = {(event) => this.onChangeText(event.target.value)}
						placeholder='もっと詳しい内容' style={{ minHeight: 100 }} />
				</Form>

				<AdImageUploader
					onChangePictures={(pictures) => this.onChangePictures(pictures)}
				/>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default OnlyLookAdCreate
