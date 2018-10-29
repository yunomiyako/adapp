import React , {Component}  from "react"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import style from "./AllAd.css"
import TabComponent from "../CommonSemanticUI/tab"
import fetchAdListForAllAd from "../../api/fetchAdListForAllAd"
import fetchAdList from "../../api/fetchAdList"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"


class AllAd extends Component {

	constructor(props) {
		super(props)
		const otherType = [{string : "newlyCreated" , short_title : "最近作られたもの"}]
		const types = otherType.concat(AdTypeEnum.getEnums())
		const keys = types.map(type => type.string)
		const list = keys.reduce(
			(o, type) => { 
			  o[type] = 0;
			  return o;
		  }, {});		
		const list2 = keys.reduce(
			(o, type) => { 
			  if(type == "newlyCreated"){
				o[type] = false
			  }else {
			  	o[type] = true;
			  }
			  return o;
		  }, {});

		this.state = {	
			types : types , 
			ad_lists : {},
			ad_num : list,
			focused_ad_list : [],
			show_fluid:list2
		}

		
	}
	
	componentDidMount() {
		const first_type = this.state.types[0].string
		this.addAdlist(first_type)
	}

	async　addAdlist(adType){
		const ad_num = this.state.ad_num
		ad_num[adType] = ad_num[adType] + 5
		
		var ad_list = []
		if(adType == "newlyCreated") {
			//雑だが、newlyCreatedの時だけ特別扱いして、従来のAPIを使い回す
			//FIXME : バックエンドコードを書き換えて統一的に扱う
			if(ad_num[adType] == 5 ){
				ad_list = await fetchAdList()
			}
		} else {
			ad_list = await fetchAdListForAllAd(adType , ad_num[adType])
		}
		
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
		if(ad_lists[adType]) {
			ad_lists[adType] = ad_lists[adType].concat(ad_listWithImage)
		} else {
			ad_lists[adType] = ad_listWithImage
		}
		
		var show_fluid = this.state.show_fluid
		if (ad_listWithImage.length < 5){
			show_fluid[adType] = false
		}

		this.setState(
			{
				ad_lists : ad_lists,
				ad_num : ad_num,
				focused_ad_list : ad_lists[adType],
				show_fluid : show_fluid
			}
		)
	}

	onChangeTab(tabNum){

		const type = this.state.types[tabNum]
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
			this.addAdlist(key)
		}
	}

	onClickFluid(key){
		this.addAdlist(key)
	}

	render() {
		const types = this.state.types
		const columns = types.map(type => type.short_title)
		const keys = types.map(type => type.string)
		
		return (
			<div className={style.AllAd}>

				<TabComponent 
					columns= {columns}
					keys= {keys}
					onChangeTab = {(tabNum) => this.onChangeTab(tabNum)}
					focused_ad_list = {this.state.focused_ad_list}
					onClickFluid = {(key) => this.onClickFluid(key)}
					show_fluid = {this.state.show_fluid}
				/>

			</div>
				
		)
	}	
}

export default AllAd
