import React , {Component}  from "react"
import ReturnPageNew from "./ReturnPageNew"
import RatingComponent from "./RatingComponent"
import ErrorPage from "../CommonSemanticUI/ErrorPage"
import saveRate from "../../api/SaveRate"
import style from "./ReturnPage.css"
import { Message , Button } from "semantic-ui-react"
import fetchRandomAdData from "../../api/fetchRandomAdData";

class ReturnPageHome extends Component {
	componentDidMount() {
		this.fetchReturnData()
	}

	componentWillUnmount() {
		//キャッシュを消す(そもそもreduxでやった意味とはという感じだが)
		this.props.onClearReturnPage()
	}

	fetchReturnData() {	
		const id_return = this.props.match.params.id_return
		this.props.onFetchReturn(id_return)
	}

	saveRate(rating) {
		this.props.onChangeRate(rating)
		const id_return = this.props.match.params.id_return
		saveRate(id_return ,rating)
	}

	onClickBackButton() {
		const id_user = this.props.ad_info.id_user 
		const id_ad = this.props.ad_info.id_ad
		this.props.history.push("/ad_page/" + id_user + "/" + id_ad )
	}

	async onClickRandomButton() {
		const res = await fetchRandomAdData()
		this.props.history.push("/ad_page/" + res.id_user + "/" + res.id_ad )
	}

    
	render() {
		if(this.props.errorMessage) {
			return ErrorPage(this.props.errorMessage)
		}
		return (
			<div className={style.ReturnPage}>
				<div className={style.ReturnPageContainer}>
					<ReturnPageNew
						returnType = {this.props.returnType}
						returnObject = {this.props.returnObject}
						urls = {this.props.urls}
						returnDescription = {this.props.returnDescription} 
						ad_info = {this.props.ad_info}
						loading = {!this.props.returnType} //まともにやれ
					/>

					<Message
						success
						header='お返しはいかがでしたか？'
						content='下の星マークからぜひ評価をしていってください'
					/>

					<RatingComponent
						rating = {this.props.rating}
						onRate = {(rate) => this.saveRate(rate)}						
					/>

					<br/><br/><br/>
					<div>
						<Button 
							color="orange"
							size="massive"
							onClick={() => this.onClickBackButton()}>
						このお返しの宣伝に戻る
						</Button>
						<br/><br/>
						<Button 
						color="blue"
						size="massive"
						onClick={() => this.onClickRandomButton()}>
						他の宣伝を見る(ランダム)
						</Button>
					</div>

					
				</div>
			</div>
		)
	}
}

export default ReturnPageHome
