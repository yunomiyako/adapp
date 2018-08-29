import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const changeUrlToOriginal = (image_list) => {
	console.log(image_list)
	if(image_list) {
		return image_list.map((img) => {
			return {original : img , thumbnail : img , sizes:200}
		})
	}else {
		return []
	}
}

class FourImageComponent extends Component {
	render() {
		return (
			<div>
				<div id="FourImageComponent">
					<ImageGallery items={changeUrlToOriginal(this.props.images)} />
				</div>
			</div>
		)
	}
}

export default FourImageComponent