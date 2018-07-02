import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Input } from "semantic-ui-react"
import { Dropdown } from "semantic-ui-react"


//とりあえず適当な値をここでセット
//TODO : いい感じに外から注入する
const options = [
	{text : "私の作った「　　」を見て！" , value : "私の作った「」を見て！" , key : 1} ,
	{text : "みんなで作った「　　」を見て！" , value : "みんなで作った「」を見て！" , key : 2} ,
	{text : "僕の描いた「　　」をツイートしてください" , value : "僕の描いた「」をツイートしてください"  , key : 3}
]

class TitleCreateComponent extends Component {

	componentWillMount() {
		//propsの初期化をします
		//TODO : ランダムにしてみる
		this.selectExample(options[0].value)
	}

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	InputExampleInput(){
		return (<Input placeholder='タイトルを入力してね' fluid
			onChange={(event) => this.onInputCharacter(event.target.value)}
			value={this.props.title}  />)
	}

	DropdownExampleSelection() {
  	return (<Dropdown text='他の例に変えてみる'
			selectOnBlur = {false}
			onChange = {(event, data) => this.selectExample(data.value)}
			fluid selection options={options} />)

		//TODO : 見た目のカスタマイズ
		// return (  <Dropdown text='他の例に変えてみる'>
		// 			      <Dropdown.Menu>
		// 			        {options.map(option => <Dropdown.Item key={option.key} {...option} />)}
		// 			      </Dropdown.Menu>
		// 				  </Dropdown>)
	}

	onInputCharacter(value) {
		this.props.onChangeTitle(value)
	}

	selectExample(text) {
		this.props.onChangeTitle(text)
	}

	render() {
		return (
			<div className="AdCreatePage-TitleCreateComponent">
				<div className="AdCreatePage-TitleCreateComponent-textfield-frame">
					{this.InputExampleInput()}
				</div>
				<div className="AdCreatePage-TitleCreateComponent-select-frame">
					{this.DropdownExampleSelection()}
				</div>
			</div>
		)
	}
}

export default TitleCreateComponent
