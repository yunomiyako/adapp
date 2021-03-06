import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Comment  , Modal , Button , Form , TextArea} from "semantic-ui-react"

import UploaderWithSlider from "./UploaderWithSlider"
import renderNewLine from "../../Utils/renderNewLine"
import { get_userdetail } from "../../localStorage/user_detail";

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class TwitterLikeComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}

	constructor(props) {
		super(props)
		this.state = {
			modalOpen : false ,
			provisionalText : ""
		}
	}

	show(){
		this.setState({ 
			modalOpen: true, 
			provisionalText : this.props.adObject.text
		 })
	}

	close(doSave) {
		if(doSave) {
			const newObj = dotProp.set(this.props.adObject , "text" , this.state.provisionalText)
			this.props.onChangeAdObject(newObj)
		} else {
			this.setState({provisionalText : this.props.adObject.text})
		}
		this.setState({ modalOpen : false})
	}

	onChangeText = (text) => {
		this.setState({provisionalText : text})
	}

	onChangePictures = (pictures) => {
		const newObj = dotProp.set(this.props.adObject , "images" , pictures)
		this.props.onChangeAdObject(newObj)
	}

	insertDefaultMessage(){
		//TODO : 埋め込み
		var defaultMessage = ""
		const user_detail = get_userdetail()
		if(user_detail) {
			const screen_name = user_detail.screen_name
			const username = user_detail.username
			defaultMessage = username + "さん(@" + screen_name + ")からの宣伝です。"
		}
		if(this.props.insertDefaultMessage) {
			return (
				<div>
					{defaultMessage}
					<br/>
					<br/>
				</div>
			)
		}
	}

	CommentExampleMetadata(text) {
		return (
			<Comment.Group>
				<Comment>
					<Comment.Avatar as='a' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png' />
					<Comment.Content>
						<Comment.Author>誰かの名前</Comment.Author>
						<Comment.Metadata>
							<div>@darekanoid</div>
						</Comment.Metadata>
						<Comment.Text>
							<div onClick={() => this.show()}>
								{this.insertDefaultMessage()}
								{text ? renderNewLine(text) : <a >ここをクリックして宣伝文を記述</a>}
							</div>
						</Comment.Text>
					</Comment.Content>
				</Comment>

				<Modal size="small" open={this.state.modalOpen} onClose={() => this.close(true)}>
					<Modal.Header>ツイート内容</Modal.Header>
					<Modal.Content>
						<Form>
							<TextArea autoHeight
								placeholder='宣伝内容' rows={3}
								value={this.state.provisionalText}
								onChange = {(event) => this.onChangeText(event.target.value)}/>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button negative onClick={() => this.close(false)}>No</Button>
						<Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={() => this.close(true)}/>
					</Modal.Actions>
				</Modal>
			</Comment.Group>)
	}



	render() {
		const text = this.props.adObject.text
		return (
			<div>
				<div className="TwitterLikeComponent">
					{this.CommentExampleMetadata(text)}
				</div>
				<div className={style.AdImageUploaderModalFrame}>
			<UploaderWithSlider
				pictures = {this.props.adObject.images}
				id="twitterlike"
				onChangePictures={this.onChangePictures}
				 />
				</div>
			</div>
		)
	}
}

export default TwitterLikeComponent
