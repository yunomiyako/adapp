import React , {Component}  from "react"

//css
import style from "./CampaignPage.css"
import QueryString from "../../Utils/QueryString"
//semantic UI
import { Form, TextArea , Button , Dimmer , Loader } from "semantic-ui-react"
import { getSimpleMessage, postSimpleMessage } from "../../api/SimpleMessage";
import ErrorView from "../CommonSemanticUI/ErrorPage";

class CreateSimpleMessage extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            message : "" , 
            success : false , 
            loading : true
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
                loading : false
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
				<TextArea autoHeight placeholder='当たった喜びや感謝を書いてね！' rows={2}
					onChange={this.onInputCharacter}
					value={this.state.message}
				/>
                <Button onClick={() => this.onClickSubmit()}>送信！</Button>
			</Form>
		)
    }
    
    onClickSubmit() {
        const payload = {...QueryString , message : this.state.message}
        console.log(payload)
        postSimpleMessage(payload)
    }

	onInputCharacter = (event) => {
		this.setState({
            message : event.target.value
        })
	}

	render() {
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
                    {this.renderTextArea()}
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
