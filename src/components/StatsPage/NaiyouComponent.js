import React , {Component}  from "react"
import {List , Image} from "semantic-ui-react"
import style from "./StatsPage.css"

class NaiyouComponent extends Component {
	onClickListItem(id_user) {
		this.props.onClickListItem(id_user)
	}

	renderSadMessage() {
		if(this.props.receivers) {
			if(this.props.receivers.length == 0) {
				return (
					<h3 className={style.sad_text}>まだ宣伝してくれた人はいません<span role="img" aria-label="sad face">😭</span></h3>
				)
			}
		}
	}

	renderUserList(items) {
		//TODO : userdetailから修正
		items = items.map(item => {
			console.log(item.profile_image_url)
			item.header = item.user_detail.name
			item.content = ""
			item.icon = item.user_detail.profile_image_url
			return item
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

	render() {
		return (
			<div className={style.NaiyouComponent}>
				<div className={style.aaaa}><h2>宣伝してくれた人たち</h2></div>
				{this.renderUserList(this.props.receivers)}
				{this.renderSadMessage()}
			</div>
		)
	}
}

export default NaiyouComponent