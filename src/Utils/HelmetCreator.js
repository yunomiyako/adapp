import React  from "react"
import {Helmet} from "react-helmet"

export default function(title) {
	const defaultTitle = "adApp"
	if(title) {
		title = title + " | " + defaultTitle
	}
	return (
		<Helmet>
			<title>{title  || defaultTitle}</title>
		</Helmet>
	)

}