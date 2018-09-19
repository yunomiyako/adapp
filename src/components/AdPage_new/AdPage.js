import React , {Component}  from "react"
import { Dimmer , Loader } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"

import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"
import FeedComponent from "./FeedComponent"
import ErrorPage from "../CommonSemanticUI/ErrorPage"

import {redirectToReturnPage} from "../Redirect/redirect"

class AdPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			urls: []
		}
	}

	componentWillMount() {
		this.fetchAdData()
	}

	fetchAdData() {	
		const id_user = this.props.match.params.id_user
		const id_ad = this.props.match.params.id_ad
		this.props.fetchAdData(id_user, id_ad )
	}

	onClickActionButton() {
		const id_user = this.props.match.params.id_user
		const id_ad = this.props.match.params.id_ad
		const payload = {"id_user" : id_user , "id_ad" : id_ad}
		this.props.onClickActionButton(payload)
	}

	render() {
		if(this.props.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}

		if(this.props.errorMessage) {
			return ErrorPage(this.props.errorMessage)
		}

		const id_return = this.props.id_return_to_go
		if (id_return) {
			this.props.onResetIdReturnToGO()
			return redirectToReturnPage(id_return)
		}

		return (
			<div className={style.AdPage}>
				<div className={style.AdPageContainer}>
					<div>
						<FourImageComponent
							images = {this.props.imageUrls}
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
							rating = {this.props.rating}
						/>
					</div>

					<div>
						<ActionComponent
							onClickActionButton = {() => this.onClickActionButton()}
							returnDescription = {this.props.returnDescription}
							adType = {this.props.adType}
							loading = {this.props.actionLoading}
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