import React from "react"
import ImageUploader from "react-images-upload"
import { Button, Modal } from "semantic-ui-react"
import style from "./AdCreatePage.css"
import {imageUploadUserWithRandomName} from "../../api/imageUpload"

import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"

import {get_id_user} from "../../localStorage/user_detail"

class AdImageUploaderModal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key2 of keys2) {
			if (nextState[key2] !== this.props[keys2]) {
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
		const defaultMaxNum = 4
		this.onDrop = this.onDrop.bind(this)
		this.state = {
			pictures : [],
			modalOpen: false ,
			okIsDisabled : true,
			loading : false
		}
		this.maxNum = this.props.maxNum || defaultMaxNum
	}

	onDrop(pictureFiles) {
		this.setState({pictures : pictureFiles})
		this.onResetDom()
		this.setState({okIsDisabled:false})
		if(pictureFiles.length > this.maxNum) {
			this.setState({okIsDisabled:true})
			this.onChangeDom()
		} else if (pictureFiles.length == 0 ) {
			this.setState({okIsDisabled:true})
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
		this.props.onClickOk([])
		this.setState({pictures : [] , okIsDisabled:true})
		this.setState({ modalOpen: false })
	}

	handleCancel() {
		this.handleClose()
	}

	handleOk() {
		//画像をアップロード
		this.setState({loading : true})
		const id_user = get_id_user()
		Promise.all(imageUploadUserWithRandomName(this.state.pictures , id_user)).then((values) => {
			const keys = values.map(v => v.key)
			console.log(keys)
			this.props.onChangePictures(keys)
			this.props.onClickOk(keys)
			this.setState({loading : false})
			this.handleClose()
		})
	}

	handleClear() {
		this.props.onChangePictures([])
		this.handleClose()
	}

	renderButtons() {
		return (
			<React.Fragment>
				<PhoneBreakpoint>
					<Button color="black" size="mini" onClick={() => this.handleClear()} disabled={this.props.picNum == 0}> 画像全削除 </Button>
					<Button color="red" size="mini" onClick={() => this.handleCancel()}>キャンセル</Button>
					<Button color="green" size="mini" onClick={() => this.handleOk()} 
						disabled={this.state.okIsDisabled || this.state.loading}
						loading = {this.state.loading}
					>アップロード</Button>
				</PhoneBreakpoint>
				<TabletBreakpoint>
					<Button color="black" onClick={() => this.handleClear()} disabled={this.props.picNum == 0}> 画像全削除 </Button>
					<Button color="red" onClick={() => this.handleCancel()}>キャンセル</Button>
					<Button color="green" onClick={() => this.handleOk()} 
						disabled={this.state.okIsDisabled || this.state.loading}
						loading = {this.state.loading}
					>アップロード</Button>
				</TabletBreakpoint>
				<DesktopBreakpoint>
					<Button color="black" onClick={() => this.handleClear()} disabled={this.props.picNum == 0}> 画像全削除 </Button>
					<Button color="red" size="big" onClick={() => this.handleCancel()}>キャンセル</Button>
					<Button color="green" size="big" onClick={() => this.handleOk()} 
						disabled={this.state.okIsDisabled || this.state.loading}
						loading = {this.state.loading}
					>アップロード</Button>
				</DesktopBreakpoint>
				
			</React.Fragment>
		)
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
						maxFileSize={5242880}
					/>
					<div >

					</div>

					{this.renderButtons()}
				</div>
			</Modal>
		)
	}
}

export default AdImageUploaderModal
