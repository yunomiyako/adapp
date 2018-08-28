import React , {Component}  from "react"
import {  Button , Responsive , Icon } from "semantic-ui-react"
import style from "./AdPage.css"

import getReturnButtonText from "../../domain/getReturnButtonText"

class ActionComponent extends Component {
	onClickButton() {
		console.log(this.props.adType)
	}
	
	render() {
		const buttonText = getReturnButtonText(this.props.adType)
		return (
			<div className={style.stickyBottom}>
				<div className = {style.boxFrame}>
					<div className = {style.leftBox}>

						<div className = {style.returnText}>
							<Icon name='gift' size='big' />
							<Responsive minWidth={Responsive.onlyTablet.minWidth}>お返し :　</Responsive>
							<span className ={style.return}>{this.props.returnDescription}</span>
						</div>

					</div>
					<div className = {style.rightBox}>
						<div className = {style.actionButton}>

							<Responsive
								{...Responsive.onlyMobile}
								as={Button}
								content={buttonText}
								color='orange' size="mini"
								onClick = {() => this.onClickButton()}
								maxWidth = {Responsive.onlyTablet.minWidth}
							/>
							<Responsive
								as={Button}
								content={buttonText}
								color='orange' size="big"
								onClick = {() => this.onClickButton()}
								minWidth={Responsive.onlyTablet.minWidth}
							/>

						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ActionComponent
