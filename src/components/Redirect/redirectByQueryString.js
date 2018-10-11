//import React from "react"
import { redirectToAdPage } from "./redirect"

export default function(queryString) {
	if(queryString.type) {
		const type = queryString.type
		if(type == "ad_page") {
			const id_user = queryString.id_user
			const id_ad = queryString.id_ad
			return redirectToAdPage(id_user, id_ad)
		}
	}
}