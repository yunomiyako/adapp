import React , {Component}  from "react"
import style from "./AdCreatePage.css"
import "./Animation.css"

//Semantic UI
import { Button } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"


// Components
import TitleCreateComponent from "./TitleCreateComponent"
import TwitterLikeContainerComponent from "./TwitterLikeContainerComponent"
import OnlyLookAdCreate from "./OnlyLookAdCreate"
import TypeSelectionComponent from "./TypeSelectionComponent"
import ReturnCreateComponent from "./ReturnCreateComponent"
import RetweetAdCreate from "./RetweetAdCreate"

//data
import adTypeButtons from "../../domain/adTypeButtons"
import returnTypeButtons from "../../domain/returnTypeButtons"

class AdCreatePage extends Component {
	constructor(props) {
		super(props)
	}

	onClickOk(NO) {
		console.log("NO : " + NO)
		if (this.props.index < 100) {
			this.props.onChangeIndex( Math.max(this.props.index , NO + 1))
		} else {
			this.props.onChangeIndex(0)
		}

	}

	renderTypeSelectionComponent(NO) {
		const frameStyle = {background:"#00b894"}
		return (
			<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
				<h1 className="AdCreatePage-Title">してもらいたいことを選んでください</h1>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeAdType(id)}
					onClickOk = {() => this.onClickOk(NO)}
					type = {this.props.adType}
					buttons = {adTypeButtons}
				/>
			</div>)
	}

	renderTitleCreateComponent(NO) {
		const frameStyle = {background:"#74b9ff"}
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">タイトルをつけよう</h1>
					<TitleCreateComponent
						onClickOk = {() => this.onClickOk(NO)}
						title = {this.props.title}
						returnDescription = {this.props.returnDescription}
						onChangeTitle = {(title) => this.props.onChangeTitle(title)}
						onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
					></TitleCreateComponent>
				</div>
			</CSSTransition>)
	}

	renderCreateAd(NO) {
		const frameStyle = {background:"#fd79a8"}

		return (
			<React.Fragment>
				<CSSTransition
					in = {this.props.index >= NO & this.props.adType == 0}
					classNames="AdCreateAnimation"
					timeout = {1000}
					unmountOnExit
				>
					<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
						<h1 className="AdCreatePage-Title">どんなツイートをしてもらいたいですか？</h1>
						<TwitterLikeContainerComponent
							adObject = {this.props.adObject}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>
				</CSSTransition>
				<CSSTransition
					in = {this.props.index >= NO & this.props.adType == 1}
					classNames="AdCreateAnimation"
					timeout = {1000}
					unmountOnExit
				>
					<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
						<h1 className="AdCreatePage-Title">何を見て欲しいですか？</h1>
						<RetweetAdCreate
							adObject = {this.props.adObject}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>
				</CSSTransition>
				<CSSTransition
					in = {this.props.index >= NO & this.props.adType == 2}
					classNames="AdCreateAnimation"
					timeout = {1000}
					unmountOnExit
				>
					<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
						<h1 className="AdCreatePage-Title">何を見て欲しいですか？</h1>
						<OnlyLookAdCreate
							adObject = {this.props.adObject}
							title = {this.props.title}
							returnDescription = {this.props.returnDescription}
							onClickOk = {() => this.onClickOk(NO)}
							onChangeAdObject = {(obj) => this.props.onChangeAdObject(obj)}
						/>
					</div>
				</CSSTransition>
			</React.Fragment>
		)
	}

	renderReturnTypeSelectionComponent(NO) {
		const frameStyle = {background:"#2d3436"}
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">お返しはどのタイプですか？</h1>
					<TypeSelectionComponent
						onClick={(id) => this.props.onChangeReturnType(id)}
						onClickOk = {() => this.onClickOk(NO)}
						type = {this.props.returnType}
						buttons = {returnTypeButtons}
					/>
				</div>
			</CSSTransition>)
	}

	renderReturnCreateComponent(NO) {
		const frameStyle = {background:"#fdcb6e"}
		return (
			<CSSTransition
				in = {this.props.index >= NO}
				classNames="AdCreateAnimation"
				timeout = {1000}
				unmountOnExit
			>
				<div className="AdCreatePage-ComponentFrame" style = {frameStyle}>
					<h1 className="AdCreatePage-Title">お返しはどのタイプですか？</h1>
					<ReturnCreateComponent
						returnType = {this.props.returnType}
						returnObject = {this.props.returnObject}
						onChangeReturnObject = {(obj) => this.props.onChangeReturnObject(obj)}
					></ReturnCreateComponent>
				</div>
			</CSSTransition>)
	}

	render() {
		return (
			<div className="AdCreatePage">
				<span className={style.StickyRightSideBar}>
					<Button onClick={() => this.props.clearState()}>全削除</Button>
				</span>
				<div className="AdCreatePageForPaddingFrame">
					{this.renderTypeSelectionComponent(1)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderTitleCreateComponent(2)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderCreateAd(3)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderReturnTypeSelectionComponent(4)}
				</div>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderReturnCreateComponent(5)}
				</div>
			</div>
		)
	}
}

export default AdCreatePage
