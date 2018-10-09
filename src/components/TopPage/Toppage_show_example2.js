import React , {Component}  from "react"
import style from "./Toppage_show_example2.css"
import FeedView from "../CommonSemanticUI/FeedView"
import fetchExampleAds from "../../api/fetchExampleAds"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import {Funcs} from "./funcs"
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
        
        this.setState(
			{
                exampleAds: examples
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
                    {FeedView("ad_page/" + this.state.exampleAds[1].id_user + "/" + this.state.exampleAds[1].id_ad , this.state.exampleAds[1]  , this.state.exampleAds[1].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p>{Funcs.getTexts().exretweet}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exretweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[3].id_user + "/" + this.state.exampleAds[3].id_ad , this.state.exampleAds[3]  , this.state.exampleAds[3].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p>{Funcs.getTexts().exlook}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exlooksub}</font></p>
				</div>
               
			</div>
            </DesktopBreakpoint>
            
            <TabletBreakpoint>
			<div className={style.Toppage_show_example_p}>

                
                <div  className={style.FeedView1}>
                    {FeedView("ad_page/" + this.state.exampleAds[1].id_user + "/" + this.state.exampleAds[1].id_ad , this.state.exampleAds[1]  , this.state.exampleAds[1].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p>{Funcs.getTexts().exretweet}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exretweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[3].id_user + "/" + this.state.exampleAds[3].id_ad , this.state.exampleAds[3]  , this.state.exampleAds[3].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p>{Funcs.getTexts().exlook}</p>
                 
                 <p><font size="6">{Funcs.getTexts().exlooksub}</font></p>
				</div>
               
			</div>
            </TabletBreakpoint>

            <PhoneBreakpoint> 
			<div className={style.Toppage_show_example_p}>

                
                <div  className={style.FeedView1}>
                    {FeedView("ad_page/" + this.state.exampleAds[1].id_user + "/" + this.state.exampleAds[1].id_ad , this.state.exampleAds[1]  , this.state.exampleAds[1].url)}
                </div>
                <div  className={style.text_tweet}>
                 <p><font size="5">{Funcs.getTexts().exretweet}</font></p>
                 
                 <p><font size="3">{Funcs.getTexts().exretweetsub}</font></p>
				</div>

                <div  className={style.FeedView2}>
                    {FeedView("ad_page/" + this.state.exampleAds[3].id_user + "/" + this.state.exampleAds[3].id_ad , this.state.exampleAds[3]  , this.state.exampleAds[3].url)}
                </div>

                 <div  className={style.text_follow}>
                 <p><font size="5">{Funcs.getTexts().exlook}</font></p>
                 
                 <p><font size="3">{Funcs.getTexts().exlooksub}</font></p>
				</div>
               
			</div>
            </PhoneBreakpoint> 
            
            
            
            </div>
        )
    }
	}
} export default Toppage_show_example