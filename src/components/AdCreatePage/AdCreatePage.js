import React , {Component}  from "react"
import "./AdCreatePage.css"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"

class AdCreatePage extends Component {
	onChangeTitle(value) {
		this.props.onChangeTitle(value)
	}


	render() {
		return (
			<div className="AdCreatePage">
				<div className="AdCreatePage-TitleCreateComponent-frame">
					<h1>タイトル</h1>
					<TitleCreateComponent onChangeTitle= {(title)=>this.onChangeTitle(title)}/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>枠の画像</h1>
					<DecorateImageComponent
						onSetImage={(image) => this.props.onSetImage(image)}
						title = {this.props.title}
						description = {this.props.description}
						image = {this.props.image}
					/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>説明</h1>
					<DescriptionCreateComponent
						onChangeDescription={(text) => this.props.onChangeDescription(text)}
						description = {this.props.description}
					/>
				</div>

				<div className="AdCreatePage-AdImageUploader-frame">
					<h1>見せたい画像(任意)</h1>
					<AdImageUploader/>
				</div>

			</div>
		)
	}
}

export default AdCreatePage
