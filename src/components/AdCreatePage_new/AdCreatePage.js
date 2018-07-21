import React , {Component}  from "react"
import "./AdCreatePage.css"

//Semantic UI
import {  } from "semantic-ui-react"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"
import ReturnSelection from "./ReturnSelectionComponent"
import ReturnCreate from "./ReturnCreateComponent"

import TypeSelectionComponent from "./TypeSelectionComponent"

class AdCreatePage extends Component {

	render() {
		const frameStyle = {
			height : "auto" ,
			width  : "auto" ,
			"max-width" : "500px"
		}

		return (
			<div className="AdCreatePage">
				<div className="ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">してもらいたいことを選んでください</h1>
					<TypeSelectionComponent
						onClick={(id) => this.props.onChangeAdType(id)}
						adType = {this.props.adType}
					/>
				</div>

				<style jsx>{`
					.ComponentFrame {
						background:#00b894;
						-webkit-border-radius: 10px 10px 10px 10px;
						border-radius: 10px 10px 10px 10px;
						padding:10px;
						margin: 0 auto;
					}
					`}</style>
			</div>
		)
	}
}

export default AdCreatePage
