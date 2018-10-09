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
	
	render() {
		var buttonText = ""
		if(this.props.hasReceived) {
			buttonText = "入手済！"
		} else {
			buttonText = getReturnButtonText(this.props.adType)
		}

		return (
			<div className={style.stickyBottom}>
	
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
			</div>
		)
	}
}

export default ActionComponent
