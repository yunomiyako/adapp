import React from "react"
import ImageUploader from "react-images-upload"
import { Button, Header, Image, Modal } from "semantic-ui-react"
import style from "./AdCreatePage.css"

class AdImageUploaderModal extends React.Component {
	constructor(props) {
		super(props)
		//this.state = {pictures : this.props.pictures}
		this.onDrop = this.onDrop.bind(this)
		this.state = {
			modalOpen: false ,
			picNum : 0 ,
			okIsDisabled : false
		}
	}

	onDrop(pictureFiles) {
		this.props.onChangePictures(pictureFiles)
		this.setState({picNum : pictureFiles.length})
		this.onResetDom()
		this.setState({okIsDisabled:false})
		if(pictureFiles.length > 4) {
			this.setState({okIsDisabled:true})
			this.onChangeDom()
		}
	}

	onResetDom() {
		var info = document.getElementById("errorMessage")
		if(info !== null) {
			info.parentNode.removeChild(info)
		}
	}

	onChangeDom() {
		var uploader = document.getElementById(this.props.id)
		var info = uploader.getElementsByClassName("errorsContainer")[0]
		info.insertAdjacentHTML("beforebegin","<div id='errorMessage' class='ui red message'>画像は４枚までです！</div>")

		//超過したもののみを変化
		var containers = uploader.getElementsByClassName("uploadPicture")
		console.log(containers.length)
		for(var i = 0 ; i < containers.length ; i++) {
			//containers[i].style.background = (i >= 4) ? "red" : "#edf2f6"
			if(i >= 4) {
				containers[i].classList.add("invalidImage")
			}
		}
	}

	handleOpen() {
		this.setState({ modalOpen: true })
	}
	handleClose() {
		this.setState({ modalOpen: false })
	}


	render() {
		const buttonText = "画像を追加(" + this.state.picNum  +  "/4)"
		return (
			<Modal
				open={this.state.modalOpen}
				trigger={<Button onClick={() => this.handleOpen()}>{buttonText}</Button>}>
				<div id={this.props.id} className={style.AdImageUploaderModal}>
					<ImageUploader
						label = "４枚まで画像を追加できます"
						withPreview = {true}
						withIcon={true}
						buttonText='Choose images'
						onChange={this.onDrop}
						imgExtension={[".jpg",".jpeg", ".png", ".gif"]}
					/>
					<Button color="green" size="big" onClick={() => this.handleClose()} disabled={this.state.okIsDisabled}>OK</Button>
				</div>
			</Modal>
		)
	}
}

export default AdImageUploaderModal
