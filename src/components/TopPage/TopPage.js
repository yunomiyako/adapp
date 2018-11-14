import React , {Component}  from "react"
import style from "./TopPage2.css"
import TopComponent from "./Topcomponent"
import ToppageSecond from "./toppage_second_comp"
import TSCMerged from "./TSE_merged"
import loginCheck from "../../localStorage/loginCheck"
import AfterLoginPage from "./AfterLoginPage"
import fetchExampleAds from "../../api/fetchExampleAds"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"
import InquiryForm from "./InquiryForm"
import Footer from "../Footer/Footer"
import AllAd from "../AllAd/AllAd"

class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			logined : false,
			loading:true
		}
	}

	componentDidMount() {
		if(loginCheck()) {
			this.setState({
				logined : true
			})
		} 
	}
	

	onClickUseWithoutRegister() {
		this.props.history.push("/ad_create")
	}

	render() {

		if(!this.state.logined) {
			return (
				<div >
					<TopComponent
						onClickUseWithoutRegister = {() => this.onClickUseWithoutRegister()}/>
					<ToppageSecond/>
					<AllAd/>
					<InquiryForm/>
					<Footer/>
				</div>
				
			)
		} else {
			return (
				<div>
					<AfterLoginPage
						history = {this.props.history}
					/>
					<InquiryForm/>
					<Footer/>
				</div>
			)
		}
	}
}

export default TopPage
