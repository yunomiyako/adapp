import React , {Component}  from "react"
import style from "./IconBattle.css"
import fetchIconBattle from "../../api/fetchIconBattle";
import { fileDownload } from "../../api/fileDownload";
import {Button , Image} from "semantic-ui-react"
import IdUserTextField from "./TextField"

class IconBattle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id_users : ["" , ""] , 
			image_url : ""
		}
	}
	
	async onClickButton() {
		const key = await fetchIconBattle(this.state.id_users)
		const image_url = fileDownload(key , "iconBattle/")
		this.setState({
			image_url
		})
	}

	renderImage() {
		console.log("imageurl = " + this.state.image_url)
		return(
			<Image
			src={this.state.image_url}/>
		)
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


	render() {
		return (
			<div>
				<br/>
				<br/>
			{this.renderImage()}
				<br/>
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
				onClick = {() => this.onClickButton()}>
				比較する</Button>
			</div>

			</div>
		)
	}
}

export default IconBattle