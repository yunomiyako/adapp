import React , {Component}  from "react"
import "./TopPage.css"


class TopPage extends Component {
	render() {
		return (
			<div className="TopPage">
				<div className="ui animated button" tabIndex="0">
					<div className="visible content">Next</div>
					<div className="hidden content">
						<i className="right arrow icon"></i>
					</div>
				</div>

				<div className="ui vertical animated button" tabIndex="0">
					<div className="hidden content">Shop</div>
					<div className="visible content">
						<i className="shop icon"></i>
					</div>
				</div>

				<div className="ui labeled button" tabIndex="0">
					<div className="ui button">
						<i className="heart icon"></i> Like
					</div>
					<a className="ui basic label">
						0
					</a>
				</div>

				<button className="ui twitter button">
					<i className="twitter icon"></i>
					Twitter
				</button>

			</div>

		)
	}
}



export default TopPage
