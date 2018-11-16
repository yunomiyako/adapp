import React , {Component} from "react"
import {Image,  Table , TextArea } from "semantic-ui-react"
import style from "./CampaignCreatePage.css"
import { placeHolderGenerate, cellTitleGenerate } from "../../domain/campaign/CampaingExamples"
import { fileDownload } from "../../api/fileDownload"

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
    
	renderTextAreaCell(text  , func , placeholder , subText , width) {
		return (
			<Table.Cell width={width}>
				<TextArea
					style={ {width : "100%" , height : "100%"} }
					onChange={(event) => func(event.target.value)}
					placeholder={placeholder}
					value={text} /> 
			</Table.Cell>
		)
	}
    
	renderImageUploadCell(imageKey , width) {
		const url = fileDownload(imageKey)
		if(url) {
			return (
				<Table.Cell width={width}>
					<Image size="small" src={url} alt="image"/>
				</Table.Cell>
			)

		} else {
			//uploader
			return (
				<Table.Cell width={width}>

				</Table.Cell>
			)
		}
	}

	onAddCampaign() {
		this.props.onAddCampaign()
	}
    
	onDeleteCampaign(index) {
		this.props.onDeleteCampaign(index)
	}
    
	renderRow(title , message , image , cellTitle , index) {
		const placeHolder = placeHolderGenerate(index)
		return(
			<Table.Row key={index}>
				{this.renderCell(cellTitle , 2)}
				{this.renderCell(title , 3)}
				{this.renderTextAreaCell(message , 
					(text) => this.props.onChangeCampaignMessage(index , text) ,
					placeHolder, 
					"" , 8)}
				{this.renderImageUploadCell(image , 3)}
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