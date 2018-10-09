import React , {Component}  from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import style from "./ReturnPage.css"
import { Rating} from "semantic-ui-react"

class RatingComponent extends Component {

	onRate(rating) {
		this.props.onRate(rating)
	}

	renderRating() {
		
		const rating = this.props.rating || 0
		console.log(rating)
		return (
			<Rating 
				onRate = {(e, { rating })  => this.onRate(rating)}
				maxRating={5} 
				rating = {rating}
				icon='star' size='massive' />
		)
		
		
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
