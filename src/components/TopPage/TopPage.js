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
import AllAd from "../AllAd/AllAd";

class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			logined : false,
			exampleAds:[],
			loading:true
		}
	}

	componentDidMount() {
		if(loginCheck()) {
			this.setState({
				logined : true
			})
		} else {
			this.get_example()
		}
	}
	async get_example() {
        const examples = await fetchExampleAds()
		const headImages = examples.map(ad => {
			if(ad.adObject) {
				if(ad.adObject.images) {
					return ad.adObject.images[0]
				}
			}
			return undefined
		})
		const urls = await getUrlsFromKeys(headImages)
		const examplesWithImage = examples.map( (ad , index) => {
			ad.url = urls[index]
			return ad
		})
        
        this.setState(
			{
                exampleAds: examplesWithImage,
                loading:false
                
			}

        )
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
					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {true}/>
					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {false}/>
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
