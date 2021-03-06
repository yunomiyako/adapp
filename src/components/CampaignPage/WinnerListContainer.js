import React , {Component}  from "react"
//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"
import { ApplicationAutoScaling } from "aws-sdk/clients/all"
import WinnerList from "./WinnerList"

class WinnerListContainer extends Component {

	ItemStatus( item_num , remain_num ){
		const item_num_style={
			fontSize:"20px",
			fontWeight:"bold"
		}
		if( remain_num <= 0 ){
			return(
				<div className={style.item_status}>
				この賞品はなくなりました
				</div>
			)
		}
		else if(remain_num <= 1){
			return(
				<div className={style.item_status}>
					残り賞品数は
					<span style={{color:"red",fontSize:"30px",fontWeight:"bold"}}>{remain_num}</span>
					<span style={item_num_style}>/{item_num}個</span>
				</div>
			)
		}
		else{
			return(
				<div className={style.item_status}>
					残り賞品数は
					<span style={{fontSize:"25px",fontWeight:"bold"}}>{remain_num}</span>
					<span style={item_num_style}>/{item_num}個</span>
				</div>
			)
		}
	}

	renderWinnerLists(campaign , applicants) {
		const objects = []
		if(!campaign) return 

		for(const key in campaign.campaign) {
			const winners = applicants.filter(applicant => {
				return applicant.result == key
			})
			const prize = campaign.campaign[key]
			
			const headerLabel = prize.title
			let prob = Number(prize.probability) * 100
			const remain = prize.people - winners.length
			const object = {
				"applicants" : winners ,
				"headerLabel" : headerLabel,
				"prob" : prob,
				"item_num" : prize.people,
				"remain_num" : remain
			}

			objects.push(object)
		}
		return objects.map(obj => {
			return (
				<div key={obj.headerLabel} className={style.prize}>
					<div className={style.prize_name}><span>{obj.headerLabel}</span></div>
					<div className={style.probability}>当選確率 : <span className={style.emphasise}>{obj.prob}%</span></div>
					{this.ItemStatus(obj.item_num , obj.remain_num)}
					<div className={style.winnerListTitle}>当選者一覧(タップでTwitterへ飛ぶ)</div>
					<div className={style.winnerList}>
						<WinnerList applicants={obj.applicants} />
					</div>
				</div>)
		})
	}

	renderMissList( campaign , applicants){
		const winners = applicants.filter(applicant => {
			return applicant.result == "外れ"
		})
		const headerLabel = "外れ"
		const object = {
			"applicants" : winners ,
			"headerLabel" : headerLabel,
		}

		if(winners.length > 0){
			return(
				<React.Fragment>
					<h2 className={style.heading}>外れてしまった人々の声</h2>
					<div key={object.headerLabel} className={style.prize}>
						<div className={style.prize_name}><span>外れ</span></div>
						<div className={style.winnerList}>
							<WinnerList applicants={object.applicants} /></div>
					</div>
				</React.Fragment>
			)
		}
	}

	render() {
		return (
			<div className={style.WinnerListContainer}>
				{this.renderWinnerLists(this.props.campaign , this.props.applicants)}
				{this.renderMissList(this.props.campaign , this.props.applicants)}
			</div>
		)
	}
}

export default WinnerListContainer
