import React , {Component}  from "react"
import style from "./CampaignHobbyPage.css"
import { } from "semantic-ui-react"
import PaymentFeedView from "./PaymentFeedView"


class PaymentFeedViewList extends Component {
	renderList() {
		const amounts = this.props.amounts
		return amounts.map(amount => {
			return <PaymentFeedView
				key={amount}
				amount = {amount}
				onToken={(token) => this.props.onToken(token , amount )}
			/>
		})
	}

	render() {

		return (
			<div className={style.PaymentFeedViewList}>
				{this.renderList()}
			</div>
		)
	}
}

export default PaymentFeedViewList
