import React , {Component}  from "react"
import {  Button , Responsive , Icon } from "semantic-ui-react"
import style from "./AdPage.css"


class ActionComponent extends Component {
	render() {
		return (
			<div className={style.stickyBottom}>
				<div className = {style.boxFrame}>
					<div className = {style.leftBox}>

						<div className = {style.returnText}>
							<Icon name='gift' size='big' />
							<Responsive minWidth={Responsive.onlyTablet.minWidth}>お返し :　</Responsive>
							<span className ={style.return}>犬の写真と生い立ちです</span>
						</div>

					</div>
					<div className = {style.rightBox}>
						<div className = {style.actionButton}>

							<Responsive
								{...Responsive.onlyMobile}
								as={Button}
								content='ツイートして受け取る'
								color='orange' size="mini"
								maxWidth = {Responsive.onlyTablet.minWidth}
							/>
							<Responsive
								as={Button}
								content='ツイートして受け取る'
								color='orange' size="big"
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
