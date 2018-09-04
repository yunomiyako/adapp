import React , {Component}  from "react"

/*
this.props.returnObject
this.props.returnType 
this.props.onChangeRate
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
			</div>
		)
	}
}

export default ReturnPageHome
