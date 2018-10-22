import React , {Component}  from "react"
import style from "./IconBattle.css"
import fetchIconBattle from "../../api/fetchIconBattle";
import { fileDownload } from "../../api/fileDownload";
import {Button , Image , Icon} from "semantic-ui-react"
import IdUserTextField from "./TextField"
import createTweetUrl2 from "../../Utils/createTweetUrl2";
import HelmetCreator from "../../Utils/HelmetCreator";

class IconBattle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading : false , 
			id_users : ["" , "adapp9"] , 
			//https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder/iconBattle/22a140d4-23b1-4a7d-a21f-fcb4920bc8ca.png
			image_url : fileDownload("initialMessage.png" , "iconBattle/")
			//image_url : fileDownload("22a140d4-23b1-4a7d-a21f-fcb4920bc8ca.png" , "iconBattle/")
		}
	}
	
	async onClickButton() {
		this.setState({
			loading : true
		})
		const key = await fetchIconBattle(this.state.id_users)
		this.setState({
			loading : false
		})
		if(key.errorMessage) {
			this.renderErrorMessage()
			return
		}
		const image_url = fileDownload(key , "iconBattle/")
		this.setState({
			image_url
		})
	}

	renderErrorMessage() {
		const image_url = fileDownload("errorMessage.png" , "iconBattle/")
		this.setState({
			image_url
		})
	}


	onClickAddForm(isAdd) {
		if(isAdd) {
			const id_users = this.state.id_users.slice()
			if(id_users.length < 5) {
				id_users.push("")
				this.setState({id_users})
			}
		} else {
			const id_users = this.state.id_users.slice()
			if(id_users.length > 1) {
				id_users.pop()
				this.setState({id_users})
			}

		}
	}

	onChangeText(index , text ) {
		text = text.replace("@" , "")
		const id_users = this.state.id_users.slice()
		id_users[index] = text
		this.setState({id_users})
	}

	renderTextFields() {
		return this.state.id_users.map( (id_user , index) => {
			return (
				<div key={index}>
				<IdUserTextField
					value = {id_user}
					onChangeText={(text) => this.onChangeText(index , text)}
					/>
				</div>
			)
		})
	}

	onClickTweetButton() {
		const text = this.createText()
		const url = createTweetUrl2(  text)
		window.open(url);
	}

	createText() {
		const list = this.state.id_users.filter(id_user => id_user != "").map(id_user => {
			return "@" + id_user
		})
		var text = "フォロワー数比較画像メーカー『アイコン惑星』%0A"
		for(var elem in list) {
			text = text + list[elem] + " vs "
		}
		text = text.substr(0, text.length - 4)
		
		return text
	}


	render() {
		return (
		<div>
			<br/><br/>
			{HelmetCreator("フォロワー数比較画像メーカー『アイコン惑星』" , this.state.image_url)}
			<div className={style.imageContainer}>
				<Image
					className={style.imageCenterize}
					src={this.state.image_url}/>
					<br/>
				
				<p>例: @BarackObama　@AbeShinzo @kurochan96wawa @kudkun</p>
				{this.renderTextFields()}
				<div>
					<Button circular
					icon="plus"
					onClick={() => this.onClickAddForm(true)}/>
					<Button circular
					icon="minus"
					onClick={() => this.onClickAddForm(false)}/>
				</div>

				<div>
					<Button 
					loading = {this.state.loading}
					onClick = {() => this.onClickButton()}>
					比較する
					</Button>
					
				</div>

				<br/><br/><br/>
				<Button 
					onClick={() => this.onClickTweetButton()}
					color="twitter"
					size = "massive">
					<Icon name='twitter' />
					ツイートする(画像を保存してから押してね)
				</Button>
		</div>
	</div>
		)
	}
}

export default IconBattle