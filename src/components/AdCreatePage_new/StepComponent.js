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
		for(var key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}
	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

	renderSteps(steps , ncol) {
		return steps.filter((step) => step.index < ncol).map(step => {
			return (<Step link
				key={step.title}
				disabled ={step.disabled}
				active={this.props.activeIndex == step.index}
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
		const isComplated = this.props.adCreateCompleted && this.props.returnCreateCompleted
		const steps = [{
			index: 0 , 
			completed : this.props.adCreateCompleted,
			onClick : () => this.onChangeIndex(0) , 
			icon : "file outline" , 
			title : "宣伝を作る" , 
			description : "show your sprits"
		} ,
		{
			index: 1 , 
			completed : this.props.returnCreateCompleted,
			onClick : () => this.onChangeIndex(1) , 
			icon : "gift" , 
			title : "お返しを作る" , 
			description : "give your all"
		} ,
		{
			index: 2 , 
			completed : false,
			onClick : () => this.onChangeIndex(2) , 
			icon : "send" , 
			title : "投稿" , 
			description : "are your body ready?",
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
