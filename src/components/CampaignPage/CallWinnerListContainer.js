import React , {Component}  from "react"
import { CSSTransitionGroup } from "react-transition-group" // ES6
//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"
import { ApplicationAutoScaling } from "aws-sdk/clients/all"
import WinnerListContainer from "./WinnerListContainer.js"

class CallWinnerListContainer extends Component {

	render() {
		return (
			<CSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}>
				<WinnerListContainer
					campaign = {this.props.campaign}
					applicants={this.props.applicants}
				/>
			</CSSTransitionGroup>
		)
	}
}

export default CallWinnerListContainer
