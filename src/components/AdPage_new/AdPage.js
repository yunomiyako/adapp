import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"

import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"
import FeedComponent from "./FeedComponent"

class AdPage extends Component {
	render() {
		return (
			<div className={style.AdPage}>
				<div>
					<FourImageComponent/>
				</div>

				<div className = {style.marginFrame}>
					<FeedComponent
						title="僕の作った星をみんなにみて欲しい"
						username="iamgod"
						content="こんな星を作っています。まだまだ未完成ですが、どんどん進化をしていて作っていて楽しいです。文字数にあまりがあるのでちょっと叫びます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ(140字)"
					/>
				</div>

				<div>
					<RatingComponent/>
				</div>

				<div>
					<ActionComponent/>
				</div>

				<br/>
				<br/><br/>
				<br/><br/><br/>
				<br/><br/><br/><br/>
			</div>
		)
	}
}

export default AdPage
