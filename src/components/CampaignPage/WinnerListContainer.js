import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"
import { ApplicationAutoScaling } from "aws-sdk/clients/all"
import WinnerList from "./WinnerList"

class WinnerListContaienr extends Component {

	renderWinnerLists(campaign , applicants) {
		const objects = []
		if(!campaign) return 
		console.log(campaign)

		for(const key in campaign.campaign) {
			const winners = applicants.filter(applicant => {
				return applicant.result == key
			})
			const prize = campaign.campaign[key]
			const headerLabel = prize.title + " (" + prize.people + "人)"
			const object = {
				"applicants" : winners , 
				"headerLabel" : headerLabel
			}

			objects.push(object)
		}
        
		return objects.map(obj => {
			return (
				<div key={obj.headerLabel}>
					<WinnerList
						headerLabel={obj.headerLabel}
						applicants={obj.applicants}
					/>
				</div>)
		})
	}
    
	render() {
		return (
			<div>
				{this.renderWinnerLists(this.props.campaign , this.props.applicants)}
			</div>
		)
	}
}

export default WinnerListContaienr
