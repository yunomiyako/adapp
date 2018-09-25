import React , {Component}  from "react"
import { Message , Icon } from "semantic-ui-react"
import style from "./AdPage.css"
import renderNewLine from "../../Utils/renderNewLine"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import getReturnButtonText from "../../domain/getReturnButtonText"

class AdDescriptionView extends Component {
	buttonName() {
		return getReturnButtonText(this.props.adType)
	}

	reward() {
		return this.props.returnDescription
	}
    
	renderDescription() {
		switch(this.props.adType) {
		case AdTypeEnum.tweet.string:
			return (
				<div>
					<p>ページ下部にある<b style={{color : "#FE9A76"}}>「{this.buttonName()}」</b>ボタンを押すと、上記内容の宣伝ツイートをします。</p>
					<p>正しくツイートされると、お返し<b style={{color : "#0E6EB8"}}>「{this.reward()}」</b>を受け取ることができます！</p>
				</div>
			)
		case AdTypeEnum.retweet.string :
			return (
				<div>
					<p>ページ下部にある<b style={{color : "#FE9A76"}}>「{this.buttonName()}」</b>ボタンを押すと、上記内容のツイートをリツイートします。</p>
					<p>正しくリツイートされると、お返し<b style={{color : "#0E6EB8"}}>「{this.reward()}」</b>を受け取ることができます！</p>
				</div>
			)
		case AdTypeEnum.follow.string :
			return (
				<div>
					<p>ページ下部にある<b style={{color : "#FE9A76"}}>「{this.buttonName()}」</b>ボタンを押すと、投稿者のtwitterアカウントをフォローします。</p>
					<p>正しくフォローされると、お返し<b style={{color : "#0E6EB8"}}>「{this.reward()}」</b>を受け取ることができます！</p>
				</div>
			)
		case AdTypeEnum.fav.string :
			return (
				<div>
					<p>ページ下部にある<b style={{color : "#FE9A76"}}>「{this.buttonName()}」</b>ボタンを押すと、上記内容のツイートをいいねします。</p>
					<p>正しくいいねされると、お返し<b style={{color : "#0E6EB8"}}>「{this.reward()}」</b>を受け取ることができます！</p>
				</div>
			)
		case AdTypeEnum.lookMe.string: 
			return (
				<div>
					<p>ページ下部にある<b style={{color : "#FE9A76"}}>「{this.buttonName()}」</b>ボタンを押せば、すぐにお返し<b style={{color : "#0E6EB8"}}>「{this.reward()}」</b>を受け取ることができます！</p>
				</div>
			)
		default:
			return "おや？"
		}

	}
	render() {
		return (
			<div>
				<Message icon color="green">
					<Icon name='handshake outline'/>
					<Message.Content>
						<Message.Header>宣伝してお返しを受け取りませんか？</Message.Header>
						{this.renderDescription()}
					</Message.Content>
				</Message>
			</div>
		)
	}
}

export default AdDescriptionView
