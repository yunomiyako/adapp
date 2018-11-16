import React , {Component} from "react"
import {Button ,   Table , TextArea } from "semantic-ui-react"
import style from "./CampaignCreatePage.css"
import { placeHolderGenerate, cellTitleGenerate, defaultPath } from "../../domain/campaign/CampaingExamples"
import { fileDownload } from "../../api/fileDownload"
import { get_id_user } from "../../localStorage/user_detail"
import { imageUploadUserWithRandomName } from "../../api/imageUpload"

//各賞品が当たった時に送られるDMのメッセージと画像を指定する
class RewardMessageSetUpComponent extends Component {    


	renderHeader(headers) {
		return headers.map( (h, index) => {
			return <Table.HeaderCell key={h + index}>{h}</Table.HeaderCell>
		})
	}
    
	renderCell(text , width) {
		return (
			<Table.Cell width={width}>
				{text}
			</Table.Cell>
		)
	}
    
	renderTextAreaCell(text  , func , placeholder  , width) {
		return (
			<Table.Cell width={width}>
				<TextArea
					rows="5"
					style={ {width : "100%" , height : "100%"} }
					onChange={(event) => func(event.target.value)}
					placeholder={placeholder}
					value={text} /> 
			</Table.Cell>
		)
	}

	onHandleImageUpload(e , index) {
		// ①イベントからfileの配列を受け取る
		var files = e.target.files
		
		const id_user = get_id_user()
		Promise.all(imageUploadUserWithRandomName( [files[0]] , id_user)).then((values) => {
			const keys = values.map(v => v.key)
			const key = keys[0]
			this.props.onChangeCampaignImage( index , key)
		})
	}
    
	renderImageUploadCell(imageKey , index , width ) {
		const url = fileDownload(imageKey)
		return (
			<Table.Cell width={width}>
				<img src={url} alt="image" className={style.cellImage}/>
				<input id={"image-upload-input"+index} type='file' accept='image/*' onChange={(e) => this.onHandleImageUpload(e , index)} /> 
				{(imageKey != defaultPath) ? <Button onClick={() => this.onClickDefaultImage(index)}>デフォルト画像</Button> : ""}
			</Table.Cell>
		)
	}

	onAddCampaign() {
		this.props.onAddCampaign()
	}
    
	onDeleteCampaign(index) {
		this.props.onDeleteCampaign(index)
	}
    
	renderRow(title , message , image , cellTitle , index) {
		return(
			<Table.Row key={index}>
				{this.renderCell(cellTitle , 2)}
				{this.renderCell(title , 3)}
				{this.renderTextAreaCell(message , 
					(text) => this.props.onChangeCampaignMessage(index , text) ,
					"当選時に送るメッセージを入力してください",  8)}
				{this.renderImageUploadCell(image , index , 3)}
			</Table.Row>
		)
	}
    
	renderRows() {
		return (this.props.campaigns.map( (campaign , index) => {
			return (
				this.renderRow(campaign.title , campaign.message , campaign.image , cellTitleGenerate(index) , index)
			)
		}))
	}

	onClickDefaultImage(index) {
		const elem = document.getElementById("image-upload-input" + index)
		if(elem) {
			elem.value = ""
		} else {
			console.log("見つからない")
		}
		this.props.onChangeCampaignImage(index , defaultPath)
	}


	render() {
		//const headers = this.props.headers
		const headers = ["" , "賞品" , "当選メッセージ" , "当選画像"]
		return (
			<Table compact celled definition>
				<Table.Header>
					<Table.Row>
						{this.renderHeader(headers)}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{this.renderRows()}
				</Table.Body>
			</Table>
		)
	}
}

export default RewardMessageSetUpComponent