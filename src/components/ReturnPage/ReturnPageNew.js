import React , {Component}  from "react"
import { Dimmer , Loader} from "semantic-ui-react"
import style from "../AdPage_new/AdPage.css"

import FourImageComponent from "../AdPage_new/FourImageComponent"
import FeedComponent from "../AdPage_new/FeedComponent"

class AdPage extends Component {
	render() {
		console.log(this.props.returnDescription)
		if(this.props.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}


		return (
			<React.Fragment>
				<div>
					<FourImageComponent
						images = {this.props.urls}
					/>
				</div>

				<div className = {style.marginFrame}>
					<FeedComponent
						title= {this.props.returnDescription}
						content={this.props.returnObject.text}
						user_detail = {undefined}
						tweetObject = {undefined}
						adType = {undefined}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default AdPage