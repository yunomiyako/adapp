import React from "react"
import ImageUploader from "react-images-upload"

class AdImageUploader extends React.Component {
	constructor(props) {
		super(props)
		//this.state = {pictures : this.props.pictures}
		const defaultMaxNum = 4
		this.onDrop = this.onDrop.bind(this)
		this.maxNum = this.props.maxNum || defaultMaxNum
	}

	onDrop(pictureFiles) {
		this.props.onChangePictures(pictureFiles)
		this.onResetDom()
		if(pictureFiles.length > this.maxNum) {
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
		for(var i = 0 ; i < containers.length ; i++) {
			//containers[i].style.background = (i >= 4) ? "red" : "#edf2f6"
			if(i >= this.maxNum) {
				containers[i].classList.add("invalidImage")
			}
		}
	}


	render() {
		return (
			<div id={this.props.id}>
				<ImageUploader
					label = {this.maxNum + "枚まで画像を追加できます"}
					withPreview = {true}
					withIcon={true}
					buttonText='Choose images'
					onChange={this.onDrop}
					imgExtension={[".jpg",".jpeg", ".png", ".gif"]}
				/>
			</div>
		)
	}
}

export default AdImageUploader
