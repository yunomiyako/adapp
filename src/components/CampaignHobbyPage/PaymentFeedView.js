import React , {Component}  from "react"
import style from "./CampaignHobbyPage.css"
import { } from "semantic-ui-react"
import PaymentButton from "../CommonSemanticUI/PaymentButton"


class PaymentFeedView extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {

		return (
			<div className={style.PaymentFeedView}>
				<h3 className={style.PaymentFeedView__toptext}>amazonギフト券{this.props.amount}円分</h3>
				<h2 className={style.PaymentFeedView__maintext}>{this.props.amount}円</h2>
				<div className={style.PaymentFeedView__button}>
					<PaymentButton
						color="blue"
						amount={this.props.amount}
						onToken = {(token) => this.props.onToken(token)}
					/>
				</div>
			</div>
		)
	}
}

export default PaymentFeedView
