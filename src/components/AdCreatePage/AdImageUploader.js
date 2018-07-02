import React from "react"
import ImageUploader from "react-images-upload"

class AdImageUploader extends React.Component {
	constructor(props) {
		//TODO : redux化
		super(props)
		this.state = { pictures: [] }
		this.onDrop = this.onDrop.bind(this)
	}

	onDrop(pictureFiles) {
		this.setState({
			pictures: this.state.pictures.concat(pictureFiles),
		})
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
