import React from "react"
import { Redirect } from "react-router-dom"

export const redirectToAdPage = function(id_user, id_ad) {
	if(id_user && id_ad) {
		return (
			<Redirect to={"/ad_page/" + id_user + "/" + id_ad} />
		)
	}
}
