import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const changeUrlToOriginal = (image_list) => {
	return image_list.map((img) => {
		return {original : img , thumbnail : img , sizes:200}
	})
}

class FourImageComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			//mainIndex : 0,
			image_list : changeUrlToOriginal(this.props.images)
		}
	}

	// renderMainImage() {
	// 	if(this.state.image_list.length !== 0) {
	// 		const url = image_list[this.state.mainIndex].url
	// 		return (
	// 			<div>
	// 				<Image.Group size='big' className={style.wrapper}>
	// 					<img className= {style.mainImage} rounded src={url}/>
	// 				</Image.Group>
	// 			</div>
	// 		)
	// 	} else {
	// 		return (
	// 			<div className={style.justSpace}/>
	// 		)
	// 	}
	// }

	// renderSubImages() {
	// 	const images = (url , index) => {
	// 		return <Image rounded src={url} onClick={() => this.onClickImage(index)}/>
	// 	}

	// 	if(this.state.image_list.length !== 0) {
	// 		const subImages =  this.state.image_list.filter( img => img.index !== this.state.mainIndex).map((img) => {
	// 			return  images(img.url , img.index)
	// 		})
	// 		return (
	// 			<div>
	// 				<Image.Group size='tiny'>
	// 					{subImages}
	// 				</Image.Group>
	// 			</div>
	// 		)
	// 	}
	// }

	// onClickImage(index) {
	// 	this.setState({mainIndex : index})
	// }


	render() {
		return (
			<div>
				<div id="FourImageComponent">
					<ImageGallery items={this.state.image_list} />
				</div>
			</div>
		)
	}
}

export default FourImageComponent
