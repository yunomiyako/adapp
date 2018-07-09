import React from "react"
import ImageUploader from "react-images-upload"

class AdImageUploader extends React.Component {
	constructor(props) {
		//TODO : redux化
		super(props)
		//this.state = {pictures : this.props.pictures}
		this.onDrop = this.onDrop.bind(this)
	}

	onDrop(pictureFiles) {
		this.props.onChangePictures(pictureFiles)
	}

	render() {
		return (
			<ImageUploader
				withPreview = {true}
				withIcon={true}
				buttonText='Choose images'
				onChange={this.onDrop}
				imgExtension={[".jpg",".jpeg", ".png", ".gif"]}
				maxFileSize={5242880}
			/>
		)
	}
}

export default AdImageUploader
