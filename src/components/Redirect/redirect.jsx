import React from "react"
import { Redirect } from "react-router-dom"

export const redirectToAdPage = function(id_user, id_ad) {
	if(id_user && id_ad) {
		return (
			<Redirect push to={"/ad_page/" + id_user + "/" + id_ad} />
		)
	}
}

export const redirectToReturnPage = function(id_return) {
	if(id_return) {
		return (
			<Redirect push to={"/return_page/" + id_return} />
		)
	}
}

export const redirectToTopPage = function() {
	return (
		<Redirect push to="/" />
	)
}