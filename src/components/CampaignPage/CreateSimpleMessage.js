import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
import QueryString from "../../Utils/QueryString"
//semantic UI
import { Form, TextArea , Button , Dimmer , Loader } from "semantic-ui-react"
import { getSimpleMessage, postSimpleMessage } from "../../api/SimpleMessage";
import ErrorView from "../CommonSemanticUI/ErrorPage";
import { redirectTo } from "../Redirect/redirect";

class CreateSimpleMessage extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            message : "" , 
            success : false , 
            loading : true , 
            sending : false  , 
            redirectTo : "" , 
            result : ""
        }
    }
    componentDidMount() {
        //urlをみて当選者か確かめる
        console.log("getSimpleMessage")
        getSimpleMessage(QueryString).then(res => {
            console.log("getSimpleMessage success")
            this.setState({
                success : true , 
                loading : false , 
                message : res.message , 
                result : res.result
            })
        }).catch(e => {
            console.log("getSimpleMessage fail")
            this.setState({
                success : false , 
                loading : false
            })
        })
    }

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTextArea(placeholder){
		return (
			<Form>
                <TextArea 
                    autoHeight placeholder={placeholder} rows={2}
					onChange={this.onInputCharacter}
					value={this.state.message}
				/>
                <Button 
                loading={this.state.sending}
                onClick={() => this.onClickSubmit()}>送信！</Button>
			</Form>
		)
    }
    
    onClickSubmit() {

        const creator_id = QueryString.creator_id
        const id_tweet = QueryString.id_tweet

        const payload = {...QueryString , message : this.state.message}
        this.setState({
            sending : true
        })
        postSimpleMessage(payload).then(res => {
            const url = "campaign/" + creator_id + "/" + id_tweet
            this.setState({
                sending : false , 
                redirectTo : url
            })
        }).catch(e => {
            this.setState({
                sending : false
            })
        })
    }

	onInputCharacter = (event) => {
		this.setState({
            message : event.target.value
        })
    }
    
    renderDescription(result) {
        if(result == "外れ") {
            return(
                <React.Fragment>
                        <h3>残念、外れでした・・・😢</h3>
                        <h4>何か一言悲しみのメッセージをお願いします。<br/>
                        こちらのメッセージは公開されますので、誹謗中傷はお控えください🙏</h4>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                        <h3>当選おめでとうございます！😄</h3>
                        <h4>何か一言喜びのメッセージをお願いします。<br/>
                        こちらのメッセージは公開されますので、個人情報等の記述はお控えください🙏</h4>
                </React.Fragment>
            )
        }
    }

	render() {
        if(this.state.redirectTo) {
            console.log("render redirect to")
            return redirectTo(this.state.redirectTo)
        }

        if(this.state.loading) {
            console.log("render loading")
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
        }
        if(this.state.success) {    
            console.log("render textArea")    
            return (
                <div className={style.CreateSimpleMessage}>
                    {this.renderDescription(this.state.result)}
                    <div className={style.TextArea}>
                        {this.renderTextArea()}
                    </div>
                </div>
            )
        } else {
            console.log("render errorview")
            return (
                ErrorView("読み込みできませんでした。")
            )
        }
	}
}

export default CreateSimpleMessage
