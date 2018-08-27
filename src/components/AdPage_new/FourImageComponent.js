import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"


const image_list = [
	{index:0 , url:"http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg"} ,
	{index:1 , url:"http://dic.nicovideo.jp/oekaki/40813.png"} ,
	{index: 2 , url:"https://grapee.jp/wp-content/uploads/28741_main.jpg"} ,
	{index:3 , url:"https://r-trade.jp/wp/wp-content/uploads/2016/02/chikyuu.png"}
]

const image_list2 = []

const changeUrlToOriginal = (image_list) => {
	return image_list.map((img) => {
		return {original : img.url , thumbnail : img.url , sizes:200}
	})
}

class FourImageComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mainIndex : 0,
			image_list : changeUrlToOriginal(image_list)
		}
	}

	renderMainImage() {
		if(this.state.image_list.length !== 0) {
			const url = image_list[this.state.mainIndex].url
			return (
				<div>
					<Image.Group size='big' className={style.wrapper}>
						<img className= {style.mainImage} rounded src={url}/>
					</Image.Group>
				</div>
			)
		} else {
			return (
				<div className={style.justSpace}/>
			)
		}
	}

	renderSubImages() {
		const images = (url , index) => {
			return <Image rounded src={url} onClick={() => this.onClickImage(index)}/>
		}

		if(this.state.image_list.length !== 0) {
			const subImages =  this.state.image_list.filter( img => img.index !== this.state.mainIndex).map((img) => {
				return  images(img.url , img.index)
			})
			return (
				<div>
					<Image.Group size='tiny'>
						{subImages}
					</Image.Group>
				</div>
			)
		}
	}

	onClickImage(index) {
		this.setState({mainIndex : index})
	}


	render() {
		return (
			<div>
				{/*
				{this.renderMainImage()}
				{this.renderSubImages()}
				*/
				}

				<ImageGallery items={this.state.image_list} />
				

			</div>
		)
	}
}

export default FourImageComponent
