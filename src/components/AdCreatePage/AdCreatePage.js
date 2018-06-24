import React , {Component}  from "react"
import { connect } from "react-redux"
import "./AdCreatePage.css"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"

class AdCreatePage extends Component {
	render() {
		return (
			<div className="AdCreatePage">
				<div className="AdCreatePage-TitleCreateComponent-frame">
					タイトル
					<TitleCreateComponent/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					枠の画像
					<DecorateImageComponent/>
				</div>

				<AdImageUploader/>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps , null)(AdCreatePage)
