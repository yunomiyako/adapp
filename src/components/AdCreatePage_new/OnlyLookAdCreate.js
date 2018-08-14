import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button} from "semantic-ui-react"

class OnlyLookAdCreate extends Component {
	renderOkButton() {
		if(this.props.adObject.text !== "") {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	//TODO : 実際の広告画面と全く同じものをだす
	render() {
		return (
			<div className="OnlyLookAdCreate">
				<div>
					タイトル : {this.props.title}
					<br/>
					テキスト : {this.props.adObject.text}
					<br/>
					もらえる見返りは=> :  {this.props.returnDescription}
				</div>
				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default OnlyLookAdCreate
