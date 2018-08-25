import React from "react"
import ImageUploader from "react-images-upload"
import { Button, Header, Image, Modal } from "semantic-ui-react"
import style from "./AdCreatePage.css"

class AdImageUploaderModal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}

	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

	constructor(props) {
		super(props)
		//this.state = {pictures : this.props.pictures}
		const defaultMaxNum = 4
		this.onDrop = this.onDrop.bind(this)
		this.state = {
			modalOpen: false ,
			okIsDisabled : false
		}
		this.maxNum = this.props.maxNum || defaultMaxNum
	}

	onDrop(pictureFiles) {
		this.props.onChangePictures(pictureFiles)
		this.onResetDom()
		this.setState({okIsDisabled:false})
		if(pictureFiles.length > this.maxNum) {
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
		info.insertAdjacentHTML("beforebegin","<div id='errorMessage' class='ui red message'>画像が上限を超えています！</div>")

		//超過したもののみを変化
		var containers = uploader.getElementsByClassName("uploadPicture")
		console.log(containers.length)
		for(var i = 0 ; i < containers.length ; i++) {
			if(i >= this.maxNum) {
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
		const buttonText = "画像を追加(" + this.props.picNum  +  "/" + this.maxNum + ")"
		return (
			<Modal
				open={this.state.modalOpen}
				trigger={<Button onClick={() => this.handleOpen()}>{buttonText}</Button>}>
				<div id={this.props.id} className={style.AdImageUploaderModal}>
					<ImageUploader
						label = {this.maxNum + "枚まで画像を追加できます"}
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
