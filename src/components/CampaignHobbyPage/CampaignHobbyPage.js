import React , {Component}  from "react"
import style from "./CampaignHobbyPage.css"
import { } from "semantic-ui-react"
import PaymentFeedView from "./PaymentFeedView"
import PaymentFeedViewList from "./PaymentFeedViewList"


class CampaignHobbyPage extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	onToken(token , amount) {
		console.log(token)
		console.log(amount)
	}

	render() {
		const amounts = [500 , 1000 , 1500 , 2000 , 2500 , 3000]
		return (
			<div className={style.CampaignHobbyPage}>
				<div className={style.CampaignHobbyPageContainer}>
					<PaymentFeedViewList
						onToken = {(token , amount) => this.onToken(token , amount)}
						amounts = {amounts}
					/>
				</div>
			</div>
		)
	}
}

export default CampaignHobbyPage
