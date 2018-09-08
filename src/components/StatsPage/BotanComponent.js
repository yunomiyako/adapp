import React , {Component}  from "react"
import {Button} from "semantic-ui-react"
import style from "./StatsPage.css"

class BotanComponent extends Component {
	render() {
		return (
			<div className={style.BotanComponent}>
				<Button>編集する</Button>
			</div>
		)
	}
}

export default BotanComponent