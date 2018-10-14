import React , {Component}  from "react"
import style from "./Toppage_show_example.css"
import FeedView from "../CommonSemanticUI/FeedView"
import fetchExampleAds from "../../api/fetchExampleAds"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import {Funcs} from "./funcs"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

class Toppage_show_example extends Component {
	constructor(props) {
		super(props)
        
	}



	render() {
        
		if(this.props.loading) {

			return (
				<div className={style.Toppage_show_example_wrapper}>
					<DesktopBreakpoint>
						<div className={style.Toppage_show_example}>
							<React.Fragment>
								<div  className={style.FeedView1}>
									
								</div>
								<div  className={style.FeedView2}>
									
								</div>
							</React.Fragment>
						</div>
					</DesktopBreakpoint>
                
                
					<TabletBreakpoint>
						<div className={style.Toppage_show_example_p}>
							<React.Fragment>
								<div  className={style.FeedView1_p}>
									
								</div>
								<div  className={style.FeedView2_p}>
									
								</div>
							</React.Fragment>
						</div>
					</TabletBreakpoint>

					<PhoneBreakpoint>
						<div className={style.Toppage_show_example_p}>
							<React.Fragment>
								<div  className={style.FeedView1_p}>
									
								</div>
								<div  className={style.FeedView2_p}>
									
								</div>
							</React.Fragment>
						</div>
					</PhoneBreakpoint> 
               
        
				</div>
                
			)
		}else{
			console.log(this.props.loading)
			return (
				<div className={style.Toppage_show_example_wrapper}>
					<DesktopBreakpoint>
						<div className={style.Toppage_show_example}>

							
							<div  className={style.FeedView1}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[0].id_user + "/" + this.props.exampleAds[0].id_ad , this.props.exampleAds[0]  , this.props.exampleAds[0].url)}
								</ScrollAnimation>
							</div>
							
							<div  className={style.text_tweet}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<p><font color="#000000">{Funcs.getTexts().extweet}</font></p>
                 
									<p><font size="6" color="#000000">{Funcs.getTexts().extweetsub}</font></p>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[2].id_user + "/" + this.props.exampleAds[2].id_ad , this.props.exampleAds[2]  , this.props.exampleAds[2].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow}>
								<p><font color="#000000">{Funcs.getTexts().exfollow}</font></p>
                 
								<p><font size="6" color="#000000">{Funcs.getTexts().exfollowsub}</font></p>
							</div>
               
						</div>
					</DesktopBreakpoint>
            
					<TabletBreakpoint>
						<div className={style.Toppage_show_example_p}>

                
							<div  className={style.FeedView1_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[0].id_user + "/" + this.props.exampleAds[0].id_ad , this.props.exampleAds[0]  , this.props.exampleAds[0].url)}
								</ScrollAnimation>
							</div>
							<div  className={style.text_tweet_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}>{Funcs.getTexts().extweet}</div>
                 
									<div  className={style.white_text}><font size="6">{Funcs.getTexts().extweetsub}</font></div>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[2].id_user + "/" + this.props.exampleAds[2].id_ad , this.props.exampleAds[2]  , this.props.exampleAds[2].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}>{Funcs.getTexts().exfollow}</div>
                 
									<div  className={style.white_text}><font size="6">{Funcs.getTexts().exfollowsub}</font></div>
								</ScrollAnimation>
							</div>
               
						</div>
					</TabletBreakpoint>

					<PhoneBreakpoint> 
						<div className={style.Toppage_show_example_p}>

                
							<div  className={style.FeedView1_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[0].id_user + "/" + this.props.exampleAds[0].id_ad , this.props.exampleAds[0]  , this.props.exampleAds[0].url)}
								</ScrollAnimation>
							</div>
							<div  className={style.text_tweet_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}><font size="5">{Funcs.getTexts().extweet}</font></div>
                 
									<div  className={style.white_text}><font size="3">{Funcs.getTexts().extweetsub}</font></div>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[2].id_user + "/" + this.props.exampleAds[2].id_ad , this.props.exampleAds[2]  , this.props.exampleAds[2].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}><font size="5">{Funcs.getTexts().exfollow}</font></div>
                 
									<div  className={style.white_text}><font size="3">{Funcs.getTexts().exfollowsub}</font></div>
								</ScrollAnimation>
							</div>
               
						</div>
					</PhoneBreakpoint> 
            
            
            
				</div>
			)
		}
	}
} export default Toppage_show_example