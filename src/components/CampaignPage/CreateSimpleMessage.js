import React , {Component}  from "react"
import {fileDownloadPrivate} from "../../api/fileDownload"
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

		getSimpleMessage(QueryString).then(res => {
			this.setState({
				success : false , 
				loading : true, 
				message : res.message , 
				result : res.result ,
				present_detail : res.present_detail
			})
			
			const pro = fileDownloadPrivate(this.state.present_detail.image, '')
			pro.then( url => {
				this.setState({
					success : true,
					loading : false,
					imageUrl : url
				})
			})
		}).catch(e => {
			this.setState({
				success : false , 
				loading : false
			})
		})
	}

	componentDidMount() {
		//urlをみて当選者か確かめる
		// getSimpleMessage(QueryString).then(res => {
		//     console.log("getSimpleMessage success")
		//     this.setState({
		//         success : true , 
		//         loading : false , 
		//         message : res.message , 
		//         result : res.result
		//     })
		// }).catch(e => {
		//     console.log("getSimpleMessage fail")
		//     this.setState({
		//         success : false , 
		//         loading : false
		//     })
		// })
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

	onClickEraseButton(){
		const creator_id = QueryString.creator_id
		const id_tweet = QueryString.id_tweet
		const url = "campaign/" + creator_id + "/" + id_tweet
		this.setState({
			sending : false , 
			redirectTo : url
		})
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

	renderShowImage(imageUrl){
		//console.log(imageUrl)
		return(
			//debug
			<img src={imageUrl} className={style.WinImage}/>
		)
	}

	renderDescription(result , present_detail) {
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
				{this.renderShowImage(this.state.imageUrl)}
				<h3>{present_detail.title}に当選しました！</h3>
				<h4>{present_detail.message}</h4>
				<h4>何か一言喜びのメッセージをお願いします。<br/>
				こちらのメッセージは公開されますので、個人情報等の記述はお控えください🙏</h4>
				</React.Fragment>
			)
		}
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
			console.log(this.state)
			return (
				<div className={style.CreateSimpleMessage}>
				<div className={style.BlackOut}>
				<div className={style.BackRect}>
				<div className={style.EraseButton} onClick={()=>this.onClickEraseButton()} >
				<input type="button" id="EraseLabel"/>
				<div className={style.Line1}></div>
				<div className={style.Line2}></div>
				</div>
				{this.renderDescription(this.state.result , this.state.present_detail , this.state.imageUrl)}
				<div className={style.TextArea}>
				{this.renderTextArea()}
				</div>
				</div>
				</div>
				</div>
			)
		} else {
			return (
				ErrorView("読み込みできませんでした。更新すると表示されるかもしれません。")
			)
		}
	}
}

export default CreateSimpleMessage
