import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"
import { ApplicationAutoScaling } from "aws-sdk/clients/all"


class WinnerStatus extends Component {

	renderStatus(campaign , applicants){
		if(!campaign) return 

		const objects = [];
		for(const key in campaign.campaign) {
			const winners = applicants.filter(applicant => {
				return applicant.result == key
			})
			console.log(winners.length)
			const prize = campaign.campaign[key]
			const headerLabel = prize.title + "は、残り" + (prize.people - winners.length) + "個"
			const object = {
				"applicants" : winners , 
				"headerLabel" : headerLabel
			}
			objects.push(object)
		}

		return objects.map(obj => {
			return (
				<p>{obj.headerLabel}</p>
			)
		})
	}

	render() {
		console.log(this.campaign);
		return (
			<div>
			{this.renderStatus(this.props.campaign , this.props.applicants)}
			</div>
		)
	}
}

export default WinnerStatus
