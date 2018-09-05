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
					urls = {[]}
				/>
				 {/*
				 流し込んだデータの詳細です
				returnType : お返しtype
				returnObject = {text : "" , images : [key（URLではないので画像はひらけない)]}
				*/}
			</div>
		)
	}
}

export default ReturnPageHome
