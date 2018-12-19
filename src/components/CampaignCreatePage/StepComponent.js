import React , {Component} from "react"
import { Icon, Step } from "semantic-ui-react"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"


class StepComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key2 of keys2) {
			if (nextState[key2] !== this.props[key2]) {
				return true
			}
		}
		return false
	}


	renderSteps(steps , ncol) {
		return steps.filter((step) => step.index < ncol).map(step => {
			return (<Step link
				key={step.title}
				disabled ={step.disabled}
				active={this.props.activeIndex === step.index}
				completed={step.completed} onClick={step.onClick}>
				<Icon name= {step.icon} />
				<Step.Content>
					<Step.Title>{step.title}</Step.Title>
					<Step.Description>{step.description}</Step.Description>
				</Step.Content>
			</Step>)
		})
	}

	onChangeIndex = (NO) => {
		this.props.onChangeIndex(NO)
	}

	render() {
		//const isComplated = this.props.firstCompleted && this.props.secondCompleted
		const isComplated = true
		const steps = [{
			index: 0 , 
			completed : this.props.firstCompleted,
			onClick : () => this.onChangeIndex(0) , 
			icon : "gift" , 
			title : "賞品の設定" , 
			description : "present detail"
		} ,
		{
			index: 1 , 
			completed : this.props.secondCompleted,
			onClick : () => this.onChangeIndex(1) , 
			icon : "file outline" , 
			title : "キャンペーン概要" , 
			description : "about campaign"
		} ,
		{
			index: 2 , 
			completed : false,
			onClick : () => this.onChangeIndex(2) , 
			icon : "send" , 
			title : "確認画面" , 
			description : "send e-mail",
			disabled : !isComplated
		} ]

		return (
			<div>
				<DesktopBreakpoint>
					<Step.Group unstackable>
						{this.renderSteps(steps , 3)}
					</Step.Group>
				</DesktopBreakpoint>

				<TabletBreakpoint>
					<Step.Group size='mini' unstackable>

						{this.renderSteps(steps , 3)}
					</Step.Group>
				</TabletBreakpoint>

				<PhoneBreakpoint>
					<Step.Group size='tiny' unstackable>
						{this.renderSteps(steps , 2)}
					</Step.Group>
				</PhoneBreakpoint>
			</div>
		)
	}
}

export default StepComponent
