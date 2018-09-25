import React , {Component}  from "react"
import {List , Image} from "semantic-ui-react"
import style from "./StatsPage.css"
import items from "./test.js"

class NaiyouComponent extends Component {
	renderUserList(items) {
		//TODO : userdetailから修正
		items = items.map(item => {
			item.header = "username"
			item.content = "さっきツイートしてくれた"
			return item
		})

		return items.map(item => {
			return (
				<List key={item.id_user} celled size="big" animated verticalAlign='middle'>
					<List.Item>
				  <Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
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
				{this.renderUserList(this.props.receivers)}
			</div>
		)
	}
}

export default NaiyouComponent