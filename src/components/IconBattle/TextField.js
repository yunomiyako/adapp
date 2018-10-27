import React , {Component}  from "react"
import style from "./IconBattle"

import { Input , Icon , Button} from "semantic-ui-react"

class IdUserTextField extends Component {
	constructor(props) {
		super(props)
	}
    
    
    
	render() {
		return (
			<Input iconPosition='left' placeholder='Twitter ID'>
				<Icon name='at' />
				<input 
					value = {this.props.value}
					onChange = {(e) => this.props.onChangeText(e.target.value)}
				/>
			</Input>
		)
	}
}

export default IdUserTextField