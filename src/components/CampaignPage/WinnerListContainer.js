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

		for(const key in campaign.campaign) {
			const winners = applicants.filter(applicant => {
				return applicant.result == key
			})
			const prize = campaign.campaign[key]
			const headerLabel = prize.title + " (" + prize.people + "人)"
			let prob = Number(prize.probability).toFixed(3)*100;
			prob = prob.toFixed(1)
			const object = {
				"applicants" : winners ,
				"headerLabel" : headerLabel,
				"prob" : prob
			}

			objects.push(object)
		}

		console.log(objects)
		return objects.map(obj => {
			return (
				<div key={obj.headerLabel} className={style.prize}>
					<div className={style.prize_name}>{obj.headerLabel}</div>
					<div className={style.probability}>この賞品の当選確率は......<span className={style.emphasise}>{obj.prob}%!!</span></div>

					<div className={style.remaing}></div>
					<div className={style.winnerList}>
						<WinnerList applicants={obj.applicants} />
					</div>
				</div>)
		})
	}

	render() {
		return (
			<div>
				<ul>
					{this.renderWinnerLists(this.props.campaign , this.props.applicants)}
				</ul>
			</div>
		)
	}
}

export default WinnerListContaienr
