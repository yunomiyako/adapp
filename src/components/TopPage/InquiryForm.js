import React , {Component}  from "react"
import style from "./TopPage.css"
//semantic UI
import { Form, TextArea , Button } from "semantic-ui-react"
import postInquiry from "../../api/postInquiry";
import FormComponent from "../CampaignCreatePage/FormComponent";

class InquiryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            email : "" , 
            notes : "" , 
            disable : false , 
            buttonText : "送信"
        }
    }

    onClickButton = () => {
        const text = "名前 : " + this.state.name + ", email : " + this.state.email + ", 内容 : " + this.state.notes
        postInquiry(text)
        this.setState({
            disable : true , 
            buttonText : "送信済み"
        })
    }
    onChangeName(text) {
        this.setState(
            {name : text}
        )
    }
    onChangeEmail(text) {
        this.setState(
            {email : text}
        )
    }
    onChangeNotes(text) {
        this.setState(
            {notes : text}
        )
    }
	render() {
		return (
            <div className={style.InquiryFormContainer}>
            <div className={style.InquiryForm}>
            <div className={style.dotLine}><h2>お問い合わせフォーム</h2></div>
                <FormComponent
                    name = {this.state.name}
                    email = {this.state.email}
                    notes = {this.state.notes}
                    onChangeName={(text) => this.onChangeName(text)}
                    onChangeEmail = {(text) => this.onChangeEmail(text)}
                    onChangeNotes = {(text) => this.onChangeNotes(text)}
                />
                <Button 
                disabled={this.state.disable}
                onClick = {this.onClickButton}>
                {this.state.buttonText}</Button>
            </div>
                
            </div>
		)
	}
}

export default InquiryForm