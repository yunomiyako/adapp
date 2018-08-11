import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button,Input } from "semantic-ui-react"
import { Dropdown } from "semantic-ui-react"


//とりあえず適当な値をここでセット
//TODO : いい感じに外から注入する(typeによって例も変える)
const options = [
	{text : "私の作った「　　」を見て！" , value : "私の作った「」を見て！" , key : 1} ,
	{text : "みんなで作った「　　」を見て！" , value : "みんなで作った「」を見て！" , key : 2} ,
	{text : "僕の描いた「　　」をツイートしてください" , value : "僕の描いた「」をツイートしてください", key : 3}
]

class TitleCreateComponent extends Component {

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTitleInput(){
		return (<Input placeholder='タイトルを入力してね' fluid
			onChange={(event) => this.props.onChangeTitle(event.target.value)}
			value={this.props.title}  />)
	}

	renderReturnDescriptionInput() {
		return (<Input placeholder='犬の餌'
			onChange={(event) => this.props.onChangeReturnDescription(event.target.value)}
			value={this.props.returnDescription}  />)
	}

	DropdownExampleSelection() {
		return (<Dropdown text='他の例を参考にする'
			selectOnBlur = {false}
			onChange = {(event, data) => this.props.onChangeTitle(data.value)}
			fluid selection options={options} />)
	}

	renderOkButton() {
		if(this.props.title !== "" & this.props.returnDescription !== "") {
			return <Button onClick={() => this.props.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	//TODO :styleは外から渡す方がいいかもしれない。必要になったら
	render() {
		return (
			<div className="AdCreatePage-TitleCreateComponent">
				<div>
					<h3 style={{color : "white"}}>宣伝タイトル</h3>
					<div className="AdCreatePage-TitleCreateComponent-select-frame">
						{this.DropdownExampleSelection()}
					</div>
					<div className="AdCreatePage-TitleCreateComponent-textfield-frame">
						{this.renderTitleInput()}
					</div>
				</div>

				<div style = {{margin : "20px 0px"}}>
					<span style={{color : "white"}}>あげるお返しは :</span>
					<span style = {{margin : "0px 10px"}}>{this.renderReturnDescriptionInput()}</span>
				</div>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>
			</div>
		)
	}
}

export default TitleCreateComponent
