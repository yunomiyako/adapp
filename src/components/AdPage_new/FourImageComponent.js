import React , {Component}  from "react"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const changeUrlToOriginal = (image_list) => {
	if(image_list) {
		return image_list.map((img) => {
			return {original : img , thumbnail : img , sizes:200}
		})
	}else {
		return []
	}
}

class FourImageComponent extends Component {
	onScreenChange() {
		var imageContainer = document.getElementById("NoFullScreen")
		if(imageContainer){
		  imageContainer.id = "FullScreen"
		} else {
			var fullScreenedImageContainer = document.getElementById("FullScreen")
			if (fullScreenedImageContainer) {
				fullScreenedImageContainer.id = "NoFullScreen"
			}
		}
	}

	render() {
		return (
			<div>
				<div id="NoFullScreen">
					{this.props.images.length > 0 ?
						<ImageGallery 
							onScreenChange = {() => this.onScreenChange()}
							items={changeUrlToOriginal(this.props.images)} />
						: ""
					}
				</div>
			</div>
		)
	}
}

export default FourImageComponent