import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
//semantic UI
import { List , Image} from "semantic-ui-react"

class WinnerList extends Component {

	renderUserList(applicants) {
		const items = []
		applicants.forEach(applicant => {
			var content = undefined
			if(applicant.simpleMessage) {
				content = "当選メッセージ : " + applicant.simpleMessage
			}
			const user = {}
			user.id_user = applicant.user.screen_name
			user.header = applicant.user.name
			user.content = content
			user.icon = applicant.user.profile_image_url_https
			items.push(user)
		})

		return items.map(item => {
			return (
				<List key={item.id_user} celled size="big" animated verticalAlign='middle'>
					<List.Item onClick = {() => this.onClickListItem(item.id_user)}>
						<Image avatar src={item.icon}/>
						<List.Content>
							<List.Header>{item.header}</List.Header>
							{item.content}
						</List.Content>
					</List.Item>
				</List>
			)
		})
	}

	onClickListItem(screen_name) {
		const url = "https://www.twitter.com/" + screen_name
		window.location.href = url
	}
    
	renderSadMessage() {
		if(this.props.applicants) {
			if(this.props.applicants.length == 0) {
				return (
					<h3 className={style.sad_text}>まだ当選者はいません<span role="img" aria-label="sad face">😭</span></h3>
				)
			}
		}
	}
    
	render() {
		return (
			<div className={style.NaiyouComponent}>
				<div className = {style.winners}>
					{this.renderUserList(this.props.applicants)}
					{this.renderSadMessage()}
				</div>
			</div>
		)
	}
}

export default WinnerList
