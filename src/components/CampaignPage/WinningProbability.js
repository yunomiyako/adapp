import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"

class WinningProbability extends Component {

	Probability(campaign){
		render(){
			return(
				{this.campaign}
			)
		}
	}

	render() {
		return (
			<div className={style.winner_probability}>
				{this.Probability(this.props.campaign)}
			</div>
		)
	}
}

export default WinningProbability
