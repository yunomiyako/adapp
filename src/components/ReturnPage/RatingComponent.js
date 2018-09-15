import React , {Component}  from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import style from "./ReturnPage.css"
import { Rating} from "semantic-ui-react"

class RatingComponent extends Component {

	onRate(rating) {
		this.props.onRate(rating)
	}

	renderRating() {
		console.log(this.props.rating)
		if(this.props.rating){
			return (
				<Rating 
					onRate = {(e, { rating })  => this.onRate(rating)}
					maxRating={5} 
					defaultRating={this.props.rating} 
					icon='star' size='massive' />
			)
		}
	}

	render() {
		return (
			<div>
				<div className={style.Rating}>
					<h2>お返しの評価</h2>
					{this.renderRating()}
				</div>
			</div>
		)
	}
}

export default RatingComponent
