import React , {Component}  from "react"
import { connect } from "react-redux"

//css
import "./AdCreatePage.css"

//actions
import { onSetImage } from "../../actions/AdCreate"

//semantic UI
//import { Input } from 'semantic-ui-react'
//import { Dropdown } from 'semantic-ui-react'
import Slider from "react-slick"

//images
import frame1 from "../../images/tanpopo_frame.png"
import frame2 from "../../images/neko_frame.png"
import frame3 from "../../images/sumaho_frame.png"
import frame4 from "../../images/kusa_frame.png"

const frameImages = [{name:"tanpopo_frame" , img:frame1} ,
	{name:"neko_frame" , img:frame2} ,{name:"sumaho_frame" , img:frame3},
	{name:"kusa_frame" , img:frame4}]
function imageNameToPath(imageName) {
	return frameImages.filter((image) => image.name === imageName)[0]
}

class SimpleSlider extends React.Component {
	onClickImage(imageName) {
		this.props.onClickImage(imageName)
	}

	render() {
		const frameImagesTag = frameImages.map(image => {
			return (<div onClick={() => this.onClickImage(image.name)}
				key={image.name} className="AdCreatePage-ImageSelectSlider-ImageFrame">
				<img src={image.img} alt="1" className="AdCreatePage-ImageSelectSlider-Image"></img>
			</div>)
		})

		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1
		}

		return (
			<Slider {...settings} onChange={this.props.onChange}>
				{frameImagesTag}
			</Slider>
		)
	}
}


class DecorateImageComponent extends Component {

	componentWillMount() {
		//propsの初期化をします
		this.props.dispatch(onSetImage(frameImages[0]))
	}
	
	setImage(imageName) {
		let imageInfo = imageNameToPath(imageName)
		this.props.dispatch(onSetImage(imageInfo))
	}

	render() {
		return (
			<div className="AdCreatePage-DecorateImageComponent">
				<div className="AdCreatePage-DecorateImageComponent-ImageFrame">
					<img alt="画像" src={this.props.image.img} className="AdCreatePage-DecorateImageComponent-Image"></img>
				</div>
				<SimpleSlider onClickImage={imageName => this.setImage(imageName)} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		image : state.AdCreateInfo.image
	}
}

export default connect(mapStateToProps )(DecorateImageComponent)
