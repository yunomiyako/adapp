import React , {Component}  from "react"
import style from "./Toppage_show_example.css"
import FeedView from "../CommonSemanticUI/FeedView"
import fetchExampleAds from "../../api/fetchExampleAds"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import {Funcs} from "./funcs"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"
class Toppage_show_example extends Component {
	constructor(props) {
		super(props)
		this.state = {
            exampleAds:[],
            loading:true
		}
	}


    componentDidMount() {
		this.get_example()
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
                exampleAds: examplesWithImage
			}

        )
        this.setState({loading : false})
        //console.log(this.state.adObject.adType)
		
	}

	render() {
        
        if(this.state.loading) {
			return (
                <div className={style.Toppage_show_example_wrapper}>
                <DesktopBreakpoint>
                <div className={style.Toppage_show_example}>
				<React.Fragment>
					<div  className={style.FeedView1}>
						{FeedViewPlaceHolder()}
					</div>
                    <div  className={style.FeedView2}>
						{FeedViewPlaceHolder()}
					</div>
				</React.Fragment>
                </div>
                </DesktopBreakpoint>
                
                
                <TabletBreakpoint>
                <div className={style.Toppage_show_example_p}>
				<React.Fragment>
					<div  className={style.FeedView1}>
						{FeedViewPlaceHolder()}
					</div>
                    <div  className={style.FeedView2}>
						{FeedViewPlaceHolder()}
					</div>
				</React.Fragment>
                </div>
                </TabletBreakpoint>

                <PhoneBreakpoint>
                <div className={style.Toppage_show_example_p}>
				<React.Fragment>
					<div  className={style.FeedView1}>
						{FeedViewPlaceHolder()}
					</div>
                    <div  className={style.FeedView2}>
						{FeedViewPlaceHolder()}
					</div>
				</React.Fragment>
                </div>
                </PhoneBreakpoint> 
               
        
                </div>
                
			)
		}else{

		return (
            <div className={style.Toppage_show_example_wrapper}>
            <DesktopBreakpoint>
			<div className={style.Toppage_show_example}>

                
                <div  className={style.FeedView1}>
                    {FeedView("ad_page/" + this.state.exampleAds[0].id_user + "/" + this.state.exampleAds[0].id_ad , this.state.exampleAds[0]  , this.state.exampleAds[0].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p>{Funcs.getTexts().extweet}</p>
                 
                 <p><font size="6">{Funcs.getTexts().extweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[2].id_user + "/" + this.state.exampleAds[2].id_ad , this.state.exampleAds[2]  , this.state.exampleAds[2].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p>{Funcs.getTexts().exfollow}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exfollowsub}</font></p>
				</div>
               
			</div>
            </DesktopBreakpoint>
            
            <TabletBreakpoint>
			<div className={style.Toppage_show_example_p}>

                
                <div  className={style.FeedView1}>
                    {FeedView("ad_page/" + this.state.exampleAds[0].id_user + "/" + this.state.exampleAds[0].id_ad , this.state.exampleAds[0]  , this.state.exampleAds[0].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p>{Funcs.getTexts().extweet}</p>
                 
                 <p><font size="6">{Funcs.getTexts().extweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[2].id_user + "/" + this.state.exampleAds[2].id_ad , this.state.exampleAds[2]  , this.state.exampleAds[2].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p>{Funcs.getTexts().exfollow}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exfollowsub}</font></p>
				</div>
               
			</div>
            </TabletBreakpoint>

            <PhoneBreakpoint> 
			<div className={style.Toppage_show_example_p}>

                
                <div  className={style.FeedView1}>
                    {FeedView("ad_page/" + this.state.exampleAds[0].id_user + "/" + this.state.exampleAds[0].id_ad , this.state.exampleAds[0]  , this.state.exampleAds[0].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p><font size="5">{Funcs.getTexts().extweet}</font></p>
                 
                 <p><font size="3">{Funcs.getTexts().extweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[2].id_user + "/" + this.state.exampleAds[2].id_ad , this.state.exampleAds[2]  , this.state.exampleAds[2].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p><font size="5">{Funcs.getTexts().exfollow}</font></p>
                 
                 <p><font size="3">{Funcs.getTexts().exfollowsub}</font></p>
				</div>
               
			</div>
            </PhoneBreakpoint> 
            
            
            
            </div>
        )
    }
	}
} export default Toppage_show_example