import React , {Component}  from "react"
import "./AdCreatePage.css"
import "./Animation.css"

//Semantic UI
import {  } from "semantic-ui-react"
import { CSSTransition } from "react-transition-group"


// Components
import TitleCreateComponent from "./TitleCreateComponent"
import TwitterLikeContainerComponent from "./TwitterLikeContainerComponent"
import OnlyLookAdCreate from "./OnlyLookAdCreate"
import TypeSelectionComponent from "./TypeSelectionComponent"

//data
import adTypeButtons from "../../domain/adTypeButtons"
import returnTypeButtons from "../../domain/returnTypeButtons"


//いちいちアニメーション出すのがだるいため
const debugMode = false

class AdCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index : debugMode ? 100000 : 0
		}
	}

	onClickOk(NO) {
		//TODO:いずれ消す
		if(debugMode) {
			if (this.state.index < 100) {
				this.setState({index : NO + 1})
			} else {
				this.setState({index : 0})
			}
		}

		if (this.state.index < 100) {
			this.setState({index : Math.max(this.state.index , NO + 1)})
		} else {
			this.setState({index : 0})
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
				in = {this.state.index >= NO}
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

		if(this.props.adType == 0) {
			return (
				<CSSTransition
					in = {this.state.index >= NO}
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
				</CSSTransition>)
		} else if(this.props.adType == 2) {
			return (
				<CSSTransition
					in = {this.state.index >= NO}
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
				</CSSTransition>)
		}
	}

	renderReturnTypeSelectionComponent(NO) {
		const frameStyle = {background:"#2d3436"}
		return (
			<CSSTransition
				in = {this.state.index >= NO}
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

	render() {
		return (
			<div className="AdCreatePage">
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
			</div>
		)
	}
}

export default AdCreatePage
