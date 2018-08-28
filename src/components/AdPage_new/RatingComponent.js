import React , {Component}  from "react"
import { Rating } from "semantic-ui-react"
import style from "./AdPage.css"

class ActionComponent extends Component {
	render() {
		return (
			<div className={style.RatingComponent}>
				<h2>お返しを受け取った人の評価</h2>
				<Rating maxRating={5} defaultRating={this.props.rating} icon='star' size='massive' disabled />
        ({this.props.rating})
			</div>
		)
	}
}

export default ActionComponent
