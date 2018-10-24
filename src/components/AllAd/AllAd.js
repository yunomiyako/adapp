import React , {Component}  from "react"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import style from "./AllAd.css"
import TabComponent from "../CommonSemanticUI/tab"
import fetchAdListForAllAd from "../../api/fetchAdListForAllAd"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"


class AllAd extends Component {

	constructor(props) {
		super(props)

		

		this.state = {	

			
			tweet:[],
			retweet:[],
			follow:[],
			fav:[],
			lookMe:[],
			
			
			
			focused_ad_list : []
		}

		
	}
	
	componentDidMount() {
		
		this.get_adlist("tweet")
		
	}


	async get_adlist(adType) {
		
		const ad_list = await fetchAdListForAllAd(adType)

		const headImages = ad_list.map(ad => {
			if(ad.adObject) {
				if(ad.adObject.images) {
					return ad.adObject.images[0]
				}
			}
			return undefined
		})
		const urls = await getUrlsFromKeys(headImages)
		const ad_listWithImage = ad_list.map( (ad , index) => {
			ad.url = urls[index]
			return ad
		})
		
		if (adType == "tweet"){
			this.setState(
				{
					tweet: ad_listWithImage,
					focused_ad_list: ad_listWithImage
					
				}
	
			)

		}else if(adType == "retweet"){

			this.setState(
				{
					retweet: ad_listWithImage,
					focused_ad_list: ad_listWithImage		
				}
	
			)
		}else if(adType == "follow"){

			this.setState(
				{
					follow: ad_listWithImage,
					focused_ad_list: ad_listWithImage		
				}
	
			)
		}else if(adType == "fav"){

			this.setState(
				{
					fav: ad_listWithImage,
					focused_ad_list: ad_listWithImage		
				}
	
			)
		}else if(adType == "lookMe"){

			this.setState(
				{
					looKMe: ad_listWithImage,
					focused_ad_list: ad_listWithImage		
				}
	
			)
		}
        
	}

	onChangeTab(tabNum){
		

		//console.log(tabNum)
		if (tabNum == 0){

			if(this.state.tweet.length > 0){
				this.setState(
					{
						focused_ad_list: this.state.tweet			
					})
			}else{
				this.get_adlist("tweet")
			}
		}else if(tabNum == 1){

			if(this.state.retweet.length > 0){

				

				this.setState(
					{
						focused_ad_list: this.state.retweet
							
					})
			}else{
				this.get_adlist("retweet")
			}
		}else if(tabNum == 2){

			if(this.state.follow.length > 0){

				
				this.setState(
					{
						focused_ad_list: this.state.follow
							
					})
			}else{
				this.get_adlist("follow")
			}
		}else if(tabNum == 3){

			if(this.state.fav.length > 0){
				this.setState(
					{
						focused_ad_list: this.state.fav
							
					})
			}else{
				this.get_adlist("fav")
			}
		}else if(tabNum == 4){

			if(this.state.lookMe.length > 0){
				this.setState(
					{
						focused_ad_list: this.state.lookMe
							
					})
			}else{
				this.get_adlist("lookMe")
			}
		}


	}

	render() {

		
		return (
			<div className={style.AllAd}>

				<TabComponent 
				
					onChangeTab = {(tabNum) => this.onChangeTab(tabNum)}

					focused_ad_list = {this.state.focused_ad_list}

				/>

			</div>
				
		)
	}	
}

export default AllAd
