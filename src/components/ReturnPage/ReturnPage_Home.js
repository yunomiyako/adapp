import React , {Component}  from "react"
import ReturnPage from "./ReturnPage"

/*
returnType
returnObject = {text : "" , images : [key（URLではないので画像はひらけない)]}
 */
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
				{this.props.returnType || "取得失敗"}
				<ReturnPage
					returnType = {this.props.returnType}
					returnObject = {this.props.returnObject}
				/>
			</div>
		)
	}
}

export default ReturnPageHome
