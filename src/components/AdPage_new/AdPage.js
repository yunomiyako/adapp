import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"
import TitleComponent from "./TitleComponent"
import ContentComponent from "./ContentComponent"
import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"

class AdPage extends Component {
	render() {
		return (
			<div className={style.AdPage}>
				<div>
					<FourImageComponent/>
				</div>

				<div className = {style.marginFrame}>
					<div className={style.titleAndContentFrame}>
						<div className={style.TitleComponent}>
							<TitleComponent/>
						</div>

						<div className={style.ContentComponent}>
							<ContentComponent/>
						</div>
					</div>
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
