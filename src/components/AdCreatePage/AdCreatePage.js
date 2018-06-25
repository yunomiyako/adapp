import React , {Component}  from "react"
import { connect } from "react-redux"
import "./AdCreatePage.css"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"

class AdCreatePage extends Component {
	render() {
		return (
			<div className="AdCreatePage">
				<div className="AdCreatePage-TitleCreateComponent-frame">
					<h1>タイトル</h1>
					<TitleCreateComponent/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>枠の画像</h1>
					<DecorateImageComponent/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>説明</h1>
					<DescriptionCreateComponent/>
				</div>

				<div className="AdCreatePage-AdImageUploader-frame">
					<h1>見せたい画像(任意)</h1>
					<AdImageUploader/>
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps , null)(AdCreatePage)
