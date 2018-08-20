import React , {Component} from "react"
import { Icon, Step } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components
import TitleCreateComponent from "./TitleCreateComponent"
import TwitterLikeContainerComponent from "./TwitterLikeContainerComponent"
import OnlyLookAdCreate from "./OnlyLookAdCreate"
import TypeSelectionComponent from "./TypeSelectionComponent"
import RetweetAdCreate from "./RetweetAdCreate"


//data
import adTypeButtons from "../../domain/adTypeButtons"

class AdCreationComponent extends Component {
	onClickOk() {
		//validate
		this.props.onChangeAdCreateCompleted(true)
	}

	renderTypeSelectionComponent() {
		return (
			<div>
				<h3 className="AdCreatePage-Title">してもらいたいことを選んでください</h3>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeAdType(id)}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent() {
		if(this.props.adType !== "") {
			return(
				<TitleCreateComponent
					onClickOk = {() => this.onClickOk()}
					title = {this.props.title}
					adType = {this.props.adType}
					returnDescription = {this.props.returnDescription}
					onChangeTitle = {(title) => this.props.onChangeTitle(title)}
					onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
				></TitleCreateComponent>)
		}
	}

	renderCreateAdChild(adType) {
		switch(adType) {
		case "tweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">どんなツイートをしてもらいたいですか？</h3>
					<TwitterLikeContainerComponent
						adObject = {this.props.adObject}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
		case "retweet" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">リツイートして欲しいツイートを選択or作成</h3>
					<RetweetAdCreate
						adObject = {this.props.adObject}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>
			)
		case "lookMe" :
			return (
				<div>
					<h3 className="AdCreatePage-Title">何を見て欲しいですか？</h3>
					<OnlyLookAdCreate
						adObject = {this.props.adObject}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onClickOk = {() => this.onClickOk()}
						onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
					/>
				</div>)
		case "fav" :	return (
			<div>
				<h3 className="AdCreatePage-Title">いいねして欲しいツイートを選択or作成</h3>
				<RetweetAdCreate
					adObject = {this.props.adObject}
					onClickOk = {() => this.onClickOk()}
					onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
				/>
			</div>)
		case "follow" :	return (
			<div>
				<h3 className="AdCreatePage-Title">フォローしてもらいたい旨を書こう！</h3>
				<OnlyLookAdCreate
					adObject = {this.props.adObject}
					title = {this.props.title}
					returnDescription = {this.props.returnDescription}
					onClickOk = {() => this.onClickOk()}
					onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
				/>
			</div>)
		default : return (
			<div>
			</div>
		)
		}
	}



	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div className={style.tateMargin}>
					{this.renderTypeSelectionComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderTitleCreateComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderCreateAdChild(this.props.adType)}
				</div>
			</div>
		)
	}
}

export default AdCreationComponent
