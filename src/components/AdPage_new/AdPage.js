import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"
import TitleComponent from "./TitleComponent"
import ContentComponent from "./ContentComponent"
import ActionComponent from "./ActionComponent"

class AdPage extends Component {
	render() {
		return (
			<div className={style.AdPage}>
				<div>
					<FourImageComponent/>
				</div>

				<div>
					<TitleComponent/>
				</div>

				<div>
					<ContentComponent/>
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
