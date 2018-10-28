import React , {Component}  from "react"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import style from "./AllAd.css"
import TabComponent from "../CommonSemanticUI/tab"
import fetchAdListForAllAd from "../../api/fetchAdListForAllAd"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"


class AllAd extends Component {

	constructor(props) {
		super(props)
		const types = AdTypeEnum.getEnums()
		const keys = types.map(type => type.string)
		const list = keys.reduce(
			(o, type) => { 
			  o[type] = 0;
			  return o;
		  }, {});

		this.state = {	
			ad_lists : {},
			ad_num : list,
			focused_ad_list : []
		}

		
	}
	
	componentDidMount() {
		const types = AdTypeEnum.getEnums()[0]
		const first_type = types.string
		this.get_adlist(first_type)
	}


	async get_adlist(adType) {
		console.log("get_adlist" + adType)

		const ad_num = this.state.ad_num
		ad_num[adType] = ad_num[adType] + 5

		const ad_list = await fetchAdListForAllAd(adType , ad_num[adType])
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

		const ad_lists = this.state.ad_lists
		ad_lists[adType] = ad_listWithImage //キャッシュしておく
		this.setState(
			{
				ad_lists : ad_lists , 
				ad_num : ad_num,
				focused_ad_list : ad_listWithImage
			}
		)
		
		console.log(this.state.ad_lists)
        
	}

	async　addAdlist(adType){
		
		const ad_num = this.state.ad_num
		ad_num[adType] = ad_num[adType] + 5
		
		const ad_list = await fetchAdListForAllAd(adType , ad_num[adType])
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

		const ad_lists = this.state.ad_lists
		ad_lists[adType] = ad_lists[adType].concat(ad_listWithImage)
		console.log(ad_lists)

		this.setState(
			{
				ad_lists : ad_lists,
				ad_num : ad_num,
				focused_ad_list : ad_lists[adType]
			}
		)
		//console.log(this.state.ad_lists[adType])
	}

	onChangeTab(tabNum){

		const type = AdTypeEnum.getEnums()[tabNum]
		const key = type.string
		const ad_list = this.state.ad_lists[key]
		//console.log(ad_list)

		if(ad_list){
			//キャッシュがあればそれを使う
			this.setState({
				focused_ad_list : ad_list
			})	
			//console.log(this.state.focused_ad_list)
		} else {
			this.get_adlist(key)
		}
	}

	onClickFluid(key){
		this.addAdlist(key)
	}

	render() {
		const types = AdTypeEnum.getEnums()
		const columns = types.map(type => type.short_title)
		const keys = types.map(type => type.string)
		
		console.log(this.state.focused_ad_list)

		return (
			<div className={style.AllAd}>

				<TabComponent 
					columns= {columns}
					keys= {keys}
					onChangeTab = {(tabNum) => this.onChangeTab(tabNum)}
					focused_ad_list = {this.state.focused_ad_list}
					onClickFluid = {(key) => this.onClickFluid(key)}
				/>

			</div>
				
		)
	}	
}

export default AllAd
