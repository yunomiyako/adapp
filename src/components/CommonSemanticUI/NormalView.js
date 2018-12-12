import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"

//semantic UI
import { Card , List   } from "semantic-ui-react"
class NormalView extends Component {
	renderList(ls) {
		return ls.map(_item => {
			return (
				<List.Item key={_item.key}>
					<span className={style.NormalViewItem}>
						{_item.text}
					</span>
				</List.Item>
			)
		})
	}

	render() {
		const title = this.props.title || "どんな人に使ってもらいたい？"
		const ls = this.props.ls || [
			{key: 1 , text : "宣伝したいことがある"} , 
			{key: 2 , text : "お金をかけずにTwitterで宣伝したい"} , 
			{key: 3 , text : "「クラウドアドバタイジング」を試してみたい"} , 
			{key: 4 , text : "他の人にツイートしてもらいたいことがある"} , 
			{key: 5 , text : "リツイートしてもらいたいツイートがある"} , 
			{key: 6 , text : "たくさんの人にフォローしてもらいたい"} , 
			{key: 7 , text : "いいねしてもらいたいツイートがある"} , 
			{key: 8 , text : "ただただ見てほしいことがある"} ]
		return (
			<div className={style.NormalView}>
				<Card fluid>
					<Card.Content>
						<Card.Header>{title}</Card.Header>
					</Card.Content>
					<Card.Content >
						<div className={style.NormalViewContent} >
							<List bulleted relaxed>
								{this.renderList(ls)}
							</List>
						</div>
					</Card.Content>
				</Card>
			</div>
		)
	}
}

export default NormalView
