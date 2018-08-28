import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"

import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"
import FeedComponent from "./FeedComponent"


const images = [
	"http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg" , 
	"http://dic.nicovideo.jp/oekaki/40813.png",
	"https://grapee.jp/wp-content/uploads/28741_main.jpg" ,
	"https://r-trade.jp/wp/wp-content/uploads/2016/02/chikyuu.png"
]
class AdPage extends Component {
	fetchAdData() {	
	}

	createUrlFromKey() {
		//this.props.adObject.imagesをurlに変換する
	}

	render() {
		return (
			<div className={style.AdPage}>
				<div className={style.AdPageContainer}>
					<div>
						<FourImageComponent
							images = {images}
						/>
					</div>

					<div className = {style.marginFrame}>
						<FeedComponent
							title= {this.props.title}
							username= {this.props.username}
							content={this.props.adObject.text}
						/>
					</div>

					<div>
						<RatingComponent
							rating = {3.9}
						/>
					</div>

					<div>
						<ActionComponent
							returnDescription = {this.props.returnDescription}
							adType = {this.props.adType}
						/>
					</div>

					<br/>
					<br/><br/>
					<br/><br/><br/>
					<br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default AdPage