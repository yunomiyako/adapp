import React , {Component}  from "react"
import style from "./TopPage.css"
//semantic UI
import { Form, TextArea , Button } from "semantic-ui-react"
import postInquiry from "../../api/postInquiry";

class InquiryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : "" , 
            disable : false , 
            buttonText : "送信"
        }
    }

    onChangeText = (e) => {
        const text = e.target.value
        this.setState({
            text
        })
    }

    onClickButton = () => {
        postInquiry(this.state.text)
        this.setState({
            disable : true , 
            buttonText : "送信済み"
        })
    }

	renderTextArea(){
		return (
			<Form>
				<TextArea autoHeight placeholder='なんでもいいからメッセージを送ってね！' rows={2}
					onChange={this.onChangeText}
					value={this.state.text}
				/>
                <Button 
                disabled={this.state.disable}
                onClick = {this.onClickButton}>{this.state.buttonText}</Button>
			</Form>
		)
	}
	render() {
		return (
            <div className={style.InquiryFormContainer}>
            <div className={style.InquiryForm}>
            <div className={style.dotLine}><h2>お問い合わせコーナー！</h2></div>
            <p>
                新登場、お問い合わせコーナー。制作時間30分。
            何を書いてもいいよ！直接言いにくいこと、直接言いたいこと、思ったことを打ち込んでボタンを押すだけ。
                </p>
            {this.renderTextArea()}
            </div>
                
            </div>
		)
	}
}

export default InquiryForm