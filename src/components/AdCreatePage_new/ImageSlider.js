import React  from "react"
import Slider from "react-slick"
import style from "./AdCreatePage.css"


class SimpleSlider extends React.Component {
	render() {
		const imagesTag = this.props.urls.map(url => {
			return (
				<div key={url}>
					<img src={url} alt="1" className={style.previewImavge}/>
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
			<Slider {...settings}>
				{imagesTag}
			</Slider>
		)
	}
}

export default SimpleSlider