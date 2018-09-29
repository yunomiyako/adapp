import React  from "react"
import style from "./AdCreatePage.css"

import ImageSlider from "./ImageSlider"
import AdImageUploaderModal from "./AdImageUploaderModal"
import {fileDownload} from "../../api/fileDownload"
import getUrlsFromKeys from "../../Utils/getUrlsFromKeys"

class UploaderWithSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			urls : []
		}
	}

    onChangePictures = (pictures) => {
        this.props.onChangePictures(pictures)
	}
	
	componentDidMount() {
		const callback = (urls) => {
			this.setState({urls : urls})
		}
		getUrlsFromKeys(this.props.pictures , callback)
	}

	onClickOk = (pictures) => {
		const callback = (urls) => {
			this.setState({urls : urls})
		}
		getUrlsFromKeys(pictures , callback)
	}

	render() {
		return (
			<div>
                <ImageSlider
					urls = {this.state.urls}
				 />
				<AdImageUploaderModal
					onClickOk = {this.onClickOk}
					id={this.props.id}
					onChangePictures={this.onChangePictures}
					picNum={this.props.pictures.length}
					maxNum = {this.props.maxNum}
				/>
			</div>
		)
	}
}

export default UploaderWithSlider