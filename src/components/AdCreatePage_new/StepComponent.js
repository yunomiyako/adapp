import React , {Component} from "react"
import { Icon, Step } from "semantic-ui-react"

class StepComponent extends Component {
	onClickCreateAd() {

	}

	onClickCreateReturn() {

	}

	onClickSubmit() {

	}


	render() {
		const isComplated = this.props.adCreateCompleted && this.props.returnCreateCompleted
		console.log(isComplated)
		return (
			<Step.Group>
				<Step link completed={this.props.adCreateCompleted} onClick={() => this.onClickCreateAd()}>
					<Icon name='file outline' />
					<Step.Content>
						<Step.Title>宣伝を作る</Step.Title>
						<Step.Description>show your sprits</Step.Description>
					</Step.Content>
				</Step>
				<Step link completed={this.props.returnCreateCompleted} onClick={() => this.onClickCreateAd()}>
					<Icon name='gift' />
					<Step.Content>
						<Step.Title>お返しを作る</Step.Title>
						<Step.Description>give your all</Step.Description>
					</Step.Content>
				</Step>
				<Step link disabled={!isComplated} onClick={() => this.onClickSubmit()}>
					<Icon name='send' />
					<Step.Content>
						<Step.Title>投稿</Step.Title>
						<Step.Description>are your body ready?</Step.Description>
					</Step.Content>
				</Step>
			</Step.Group>)
	}
}

export default StepComponent
