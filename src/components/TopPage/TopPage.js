import React , {Component}  from "react"
import "./TopPage.css"


class TopPage extends Component {
	render() {
		return (
			<div className="TopPage">
				<div class="ui animated button" tabindex="0">
					<div class="visible content">Next</div>
					<div class="hidden content">
						<i class="right arrow icon"></i>
					</div>
				</div>

				<div class="ui vertical animated button" tabindex="0">
					<div class="hidden content">Shop</div>
					<div class="visible content">
						<i class="shop icon"></i>
					</div>
				</div>

				<div class="ui labeled button" tabindex="0">
					<div class="ui button">
						<i class="heart icon"></i> Like
					</div>
					<a class="ui basic label">
						0
					</a>
				</div>

				<button class="ui twitter button">
					<i class="twitter icon"></i>
					Twitter
				</button>
        
			</div>

		)
	}
}



export default TopPage
