import React  from "react"
import {Helmet} from "react-helmet"

export default function(title) {
	const defaultTitle = "adApp(あどあっぷ) 宣伝を加速させるwebサービス"
	if(title) {
		title = title + " | " + defaultTitle
	}
	return (
		<Helmet>
			<title>{title  || defaultTitle}</title>
		</Helmet>
	)

}