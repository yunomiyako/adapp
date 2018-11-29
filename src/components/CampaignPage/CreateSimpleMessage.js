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
            redirectTo : ""
        }
    }
    componentDidMount() {
        //urlをみて当選者か確かめる
        const id_user = QueryString.id_iser 
        const creator_id = QueryString.creator_id
        const id_tweet = QueryString.id_tweet
        const actionType = QueryString.actionType
        const token = QueryString.token
        getSimpleMessage(QueryString).then(res => {
            this.setState({
                success : true , 
                loading : false , 
                message : res.message
            })
        }).catch(e => {
            this.setState({
                success : false , 
                loading : false
            })
        })
    }

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTextArea(){
		return (
			<Form>
                <TextArea 
                    autoHeight placeholder='当たった喜びや感謝を書いてね！' rows={2}
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
        console.log("creator_id = " + creator_id)

        const payload = {...QueryString , message : this.state.message}
        this.setState({
            sending : true
        })
        postSimpleMessage(payload).then(res => {
            const url = "campaign/" + creator_id + "/" + id_tweet
            console.log(url)
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

	render() {
        if(this.state.redirectTo) {
            return redirectTo(this.state.redirectTo)
        }

        if(this.state.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
        }
        if(this.state.success) {        
            return (
                <div className={style.CreateSimpleMessage}>
                    <h3>当選おめでとう！</h3>
                    <h4>一言メッセージをお願いします。
                        こちらのメッセージは公開されます。</h4>
                    <div className={style.TextArea}>
                        {this.renderTextArea()}
                    </div>
                </div>
            )
        } else {
            return (
                ErrorView("読み込みできませんでした。")
            )
        }
	}
}

export default CreateSimpleMessage
