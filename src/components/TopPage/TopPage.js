import React , {Component}  from "react"
import style from "./TopPage2.css"
import Top_Component from "./Topcomponent"
import Toppage_second from "./toppage_second_comp"
import Toppage_show_example from "./Toppage_show_example"
import Toppage_show_example2 from "./Toppage_show_example2"
import TSC_merged from "./TSE_merged"
import loginCheck from "../../localStorage/loginCheck"
import AfterLoginPage from "./AfterLoginPage"
import fetchExampleAds from "../../api/fetchExampleAds"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"
import Footer from "../Footer/Footer"

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

	render() {

		if(!this.state.logined) {
			return (
				<div >
					<Top_Component/>
					<Toppage_second/>
					<TSC_merged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {true}/>
					<TSC_merged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {false}/>
					<Footer/>
				</div>
				
			)
		} else {
			return (
				<AfterLoginPage
					history = {this.props.history}
				/>
			)
		}
	}
}

export default TopPage
