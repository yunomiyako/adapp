import React , {Component}  from "react"
import { Dimmer , Loader } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"

import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"
import FeedComponent from "./FeedComponent"

//utils
import getUrlsFromKeys from "../../Utils/getUrlsFromKeys"

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
	render() {
		if(this.props.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}

		if(this.props.errorMessage) {
			//TODO : もっとまともなエラーページ
			return (
				<div>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					{this.props.errorMessage}
				</div>
			)
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