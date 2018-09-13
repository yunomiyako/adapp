import React , {Component}  from "react"
import style from "./TopPage.css"
import fetchAdList from "../../api/fetchAdList"
import FeedView from "../CommonSemanticUI/FeedView"
import getUrlsFromKeys from "../../Utils/getUrlsFromKeys";
class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
            adList : [] ,
            urls : []
		}
    }
    
    componentWillMount() {
        this.getAdList()
    }

	async getAdList() {
        const adList = await fetchAdList()
        const headImages = adList.map(ad => {
            if(ad.adObject) {
                if(ad.adObject.images) {
                    return ad.adObject.images[0]
                }
            }
            return undefined
        })
        const callback = (urls) => {
            this.setState({
                adList : adList, 
                urls : urls
            })
        }
        getUrlsFromKeys(headImages , callback)
	}

	renderLink() {
		return this.state.adList.map((ad,index) => {
			const link = "ad_page/" + ad.id_user + "/" + ad.id_ad
            const adObject = ad
            const url = this.state.urls[index]
			return (
                <div key={ad.id_user+ad.id_ad} className={style.FeedView}>
					{FeedView(link , adObject  , url)}
				</div>	
			)
		})
	}


	render() {
        return(
            <div className={style.FeedListComponent}>
                {this.renderLink()}
            </div>
        );
	}
}

export default TopPage