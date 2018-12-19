import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import CampaignCreateDataStructure from "../domain/campaign/CampaignCreateDataStructure"

export default function(payload) {
	const apiName = "adApp"
	const path = "/campaign/create/info"

	const data = new CampaignCreateDataStructure(payload)
	const init = { 
		body: data
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		return res.data
	})
}