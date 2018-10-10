import React , {Component}  from "react"
import {  Button , Responsive , Icon } from "semantic-ui-react"
import style from "./AdPage.css"

import getReturnButtonText from "../../domain/getReturnButtonText"
import DesktopBreakPoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakPoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakPoint from "../responsive_utilities/phone_breakpoint"

class ActionComponent extends Component {
	onClickButton() {
		this.props.onClickActionButton()
	}

	renderIdenticalbar() {
		return (
			<div className={style.tweetButton}>
				<Button 
					onClick={() => this.props.onClickActionButton()}
					color="twitter"
					size = "massive"
					fluid>
					<Icon name='twitter' />
				この宣伝をツイートする
				</Button>
			</div>
		)
	}

	renderNotIdenticalbar() {
		var buttonText = ""
		if(this.props.hasReceived) {
			buttonText = "入手済！"
		} else {
			buttonText = getReturnButtonText(this.props.adType)
		}
		return (
			<React.Fragment>
				<div className = {style.returnText}>
					<Icon name='gift' size='big' />
					<Responsive minWidth={Responsive.onlyTablet.minWidth}><div className={style.returnPrefix}>お返し :</div></Responsive>
					<span className ={style.return}>{this.props.returnDescription}</span>
				</div>

				<div className = {style.actionButton}>
					<PhoneBreakPoint>
						<Button color='orange' size="small" 
							disabled = {this.props.loading}
							loading = {this.props.loading}
							onClick = {() => this.onClickButton()}>
							{buttonText}
						</Button>
					</PhoneBreakPoint>

					<TabletBreakPoint>
						<Button color='orange' size="medium"
							disabled = {this.props.loading}
							loading = {this.props.loading}
							onClick = {() => this.onClickButton()}>
							{buttonText}
						</Button>
					</TabletBreakPoint>

					<DesktopBreakPoint>
						<Button color='orange' size="large" 
					
							disabled = {this.props.loading}
							loading = {this.props.loading}
							onClick = {() => this.onClickButton()}>
							{buttonText}
						</Button>
					</DesktopBreakPoint>

				</div>
			</React.Fragment>
		)
	}
	
	render() {

		if(this.props.isIdentical) {
			return (
				<div className={style.stickyBottomIdentical}>
					{this.renderIdenticalbar()}
				</div>
			)
		} else {
			return (
				<div className={style.stickyBottom}>
					{this.renderNotIdenticalbar()}
				</div>
			)
		}
	}
}

export default ActionComponent
