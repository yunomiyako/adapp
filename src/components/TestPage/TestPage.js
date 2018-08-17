import React , {Component}  from "react"
import "./TestPage.css"
import AdImageUploader from "../AdCreatePage_new/AdImageUploader"

import {Api} from "../../api/Api"
import { } from "semantic-ui-react"


class TestPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	onChangePictures(pic){
		console.log(pic)
	}
	render() {
		return (
			<div className="TestPage">
				<AdImageUploader
					id="testpage"
					onChangePictures={(pic) => this.onChangePictures(pic)}
				/>
			</div>
		)
	}
}

export default TestPage
