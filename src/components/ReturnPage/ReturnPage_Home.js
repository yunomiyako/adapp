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
				<br/><br/><br/><br/><br/>

				{this.props.urls.length}

				{/* <ReturnPage
					returnType = {this.props.returnType}
					returnObject = {this.props.returnObject}
					urls = {[]}
				/> */}
			</div>
		)
	}
}

export default ReturnPageHome
