import React , {Component}  from "react"
import style from "./CampaignList.css"
import {   } from "semantic-ui-react"
import fetchCampaignsList from "../../api/fetchCampaignsList";
import CamapignListComponent from "./CampaignListComponent"
class CampaignList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading : false , 
			campaigns : null , 
			fail_load : false
		}
	}

	componentDidMount() {
		this.fetchCampaignsList()
	}

	async fetchCampaignsList() {
		this.setState({loading : true})
		fetchCampaignsList().then(bdy => {
			this.setState({loading : false })
			console.log(bdy)
			this.setState(
				{
					campaigns : bdy.campaigns
				}
			)
		}).catch(e => {
			this.setState(
				{
					fail_load : true , 
					loading : false
				}
			)
		})

	}

	render() {
		return (
			<div className="content-space">
				<CamapignListComponent
				campaign_list={this.state.campaigns}/>
			</div>
		)
	}
}

export default CampaignList
