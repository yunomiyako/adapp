import React , {Component}  from "react"
import ReturnPage from "./ReturnPage"
import RatingComponent from "./RatingComponent"

import saveRate from "../../api/SaveRate"

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

	saveRate(rating) {
		console.log("rating : " + rating)
		const id_return = this.props.match.params.id_return
		saveRate(id_return ,rating)
	}

    
	render() {
		return (
			<div>
				<ReturnPage
					returnType = {this.props.returnType}
					returnObject = {this.props.returnObject}
					urls = {this.props.urls}
				/>
				<RatingComponent
					rating = {this.props.rating}
					onRate = {(rate) => this.saveRate(rate)}						
				/>
			</div>
		)
	}
}

export default ReturnPageHome
