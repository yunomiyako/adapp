import React , {Component}  from "react"
import ReturnPage from "./ReturnPage"

class ReturnPageHome extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.fetchReturnData()
	}

	fetchReturnData() {	
		const id_return = this.props.match.params.id_return
		this.props.onFetchReturn(id_return)
	}

    
	render() {
		return (
			<div>

				<ReturnPage
					returnType = {this.props.returnType}
					returnObject = {this.props.returnObject}
					urls = {this.props.urls}
				/>
			</div>
		)
	}
}

export default ReturnPageHome
