import React , {Component}  from "react"
import style from "./TopPage3.css"
import { Button, Icon } from "semantic-ui-react"
import {Funcs} from "./funcs"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"

class Top_Component extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading : false
		}
	}

	onClickTwitterLogin() {
		this.setState(
			{
				loading : true
			}
		)
		Funcs.onClicktest()
	}

	onClickUseWithoutRegister() {
		this.props.onClickUseWithoutRegister()
	}
	
  
	render() {
		return (
			<div className={style.TopPage_wrapper}>
				<div className={style.TopPage}>

					<h3 className={style.text1} >{Funcs.getTexts().title}</h3>

					<h2 className={style.text2}>{Funcs.getTexts().text2}</h2>
		
					<h2 className={style.text3}>{Funcs.getTexts().text3}</h2>

					<div className= {style.buttons}>
					
						<div className= {style.twitter_button}>
							<DesktopBreakpoint>
								<Button 
									loading = {this.state.loading}
									onClick={()=>this.onClickTwitterLogin()} color='twitter' size='massive'>
									<Icon name='twitter' /> {Funcs.getTexts().tw_button_text}
								</Button>
							</DesktopBreakpoint>
							<TabletBreakpoint>
								<Button 
									loading = {this.state.loading}
									onClick={()=>this.onClickTwitterLogin()} color='twitter' size='huge'>
									<Icon name='twitter' /> {Funcs.getTexts().tw_button_text}
								</Button>
							</TabletBreakpoint>
							<PhoneBreakpoint>
								<Button 
									loading = {this.state.loading}
									onClick={()=>this.onClickTwitterLogin()} color='twitter' size='mini'>
									<Icon name='twitter' /> {Funcs.getTexts().tw_button_text}
								</Button>
							</PhoneBreakpoint>
						</div>
					
					
					
					
						<div className= {style.login_button}>
							<DesktopBreakpoint>
								<Button 
									onClick = {() => this.onClickUseWithoutRegister()}
									color='black'size='massive'>{Funcs.getTexts().button_text}</Button >
							</DesktopBreakpoint>
							<TabletBreakpoint>
								<Button 
									onClick = {() => this.onClickUseWithoutRegister()}
									color='black'size='huge'>{Funcs.getTexts().button_text}</Button >
							</TabletBreakpoint>
							<PhoneBreakpoint>
								<Button 
									onClick = {() => this.onClickUseWithoutRegister()}
									color='black'size='mini'>{Funcs.getTexts().button_text}</Button >
							</PhoneBreakpoint>
						</div>
					
					</div>
				</div>
			</div>
		)

	}


}

export default Top_Component