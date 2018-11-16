import React , {Component} from "react"
import { Button, Checkbox, Icon, Table , Form } from "semantic-ui-react"
import style from "./CampaignCreatePage.css"
import { placeHolderGenerate, cellTitleGenerate } from "../../domain/campaign/CampaingExamples"
class RewardSetUpComponent extends Component {

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
    
	renderFormCell(text  , func , placeholder , subText , width) {
		return (
			<Table.Cell width={width}>
				<Form>
					<Form.Field>
						<div className={style.formCell}>
							<input 
								onChange={(event) => func(event.target.value)}
								placeholder={placeholder}
								value={text} /> 
							<span>{subText}</span>
						</div>
					</Form.Field>
				</Form>
			</Table.Cell>
		)
	}
    
	renderDeleteButtonCell(index , width) {
		return (
			<Table.Cell width={width}>
				<Button
					onClick={() => this.onDeleteCampaign(index)}
					fluid
					size="small"
					color="red"
					icon='delete' content='削除'>
				</Button>
			</Table.Cell>
		)
	}
    
	onAddCampaign() {
		this.props.onAddCampaign()
	}
    
	onDeleteCampaign(index) {
		this.props.onDeleteCampaign(index)
	}
    
	renderRow(title , people , cellTitle , index) {
		const placeHolder = placeHolderGenerate(index)
		return(
			<Table.Row key={index}>
				{this.renderCell(cellTitle , 2)}
				{this.renderFormCell(title , 
					(title) => this.props.onChangeCampaignTitle(index , title) ,
					placeHolder, 
					"" , 8)}
				{this.renderFormCell(people , 
					(people) => this.props.onChangeCampaignPeople(index , people) ,
					"10" , 
					"人" , 3)}
				{this.renderDeleteButtonCell(index , 3)}
			</Table.Row>
		)
	}
    
	renderRows() {
		return (this.props.campaigns.map( (campaign , index) => {
			return (
				this.renderRow(campaign.title , campaign.people , cellTitleGenerate(index) , index)
			)
		}))
	}


	render() {
		//const headers = this.props.headers
		const headers = ["" , "賞品" , "当選人数" , ""]
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

				<Table.Footer fullWidth>
					<Table.Row>
						<Table.HeaderCell />
						<Table.HeaderCell colSpan='4'>
							<Button  
								icon primary size='small'
								onClick={() => this.onAddCampaign()}>
								<Icon name='plus' /> 賞品を追加
							</Button>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		)
	}
}

export default RewardSetUpComponent