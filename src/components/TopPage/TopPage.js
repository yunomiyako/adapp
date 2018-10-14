import React , {Component}  from "react"
import style from "./TopPage2.css"
import TopComponent from "./Topcomponent"
import ToppageSecond from "./toppage_second_comp"
import TSCMerged from "./TSE_merged"
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
<<<<<<< HEAD
					<Top_Component/>
					<Toppage_second/>
					<TSC_merged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {true}/>
					<TSC_merged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {false}/>
					<Footer/>
=======
					<TopComponent/>
					<ToppageSecond/>

					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {true}/>
					
					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {false}/>
					
					<div className={style.Footerback}>	
						<div className={style.Footer}>			
							<ul>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">お問い合わせ</a></p>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">利用規約</a></p>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">プライバシーポリシー</a></p>
							</ul>		
						</div>
					</div>
>>>>>>> 093c456d66cd8d10e3b8a4fe725109c019dddf5a
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
