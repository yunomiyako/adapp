import React , {Component}  from "react"
import style from "./Toppage_show_example2.css"
import FeedView from "../CommonSemanticUI/FeedView"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import {Funcs} from "./funcs"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
class ToppageShowExample extends Component {




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

			return (
				<div className={style.Toppage_show_example_wrapper}>
					<DesktopBreakpoint>
						<div className={style.Toppage_show_example}>

                
							<div  className={style.FeedView1}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[1].id_user + "/" + this.props.exampleAds[1].id_ad , this.props.exampleAds[1]  , this.props.exampleAds[1].url)}
								</ScrollAnimation>
							</div>
							<div  className={style.text_tweet}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<p><font color="#000000">{Funcs.getTexts().exretweet}</font></p>
                 
									<p><font size="6" color="#000000">{Funcs.getTexts().exretweetsub}</font></p>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[3].id_user + "/" + this.props.exampleAds[3].id_ad , this.props.exampleAds[3]  , this.props.exampleAds[3].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<p><font color="#000000">{Funcs.getTexts().exlook}</font></p>
                 
									<p><font size="6" color="#000000">{Funcs.getTexts().exlooksub}</font></p>
								</ScrollAnimation>
							</div>
               
						</div>
					</DesktopBreakpoint>
            
					<TabletBreakpoint>
						<div className={style.Toppage_show_example_p}>

                
							<div  className={style.FeedView1_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[1].id_user + "/" + this.props.exampleAds[1].id_ad , this.props.exampleAds[1]  , this.props.exampleAds[1].url)}
								</ScrollAnimation>
							</div>
							<div  className={style.text_tweet_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}>{Funcs.getTexts().exretweet}</div>
                 
									<div  className={style.white_text}><font size="6">{Funcs.getTexts().exretweetsub}</font></div>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[3].id_user + "/" + this.props.exampleAds[3].id_ad , this.props.exampleAds[3]  , this.props.exampleAds[3].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow_p}>
								<ScrollAnimation animateIn="fadeIn"
									animateOnce={true}>
									<div  className={style.white_text}>{Funcs.getTexts().exlook}</div>
                 
									<div  className={style.white_text}><font size="6">{Funcs.getTexts().exlooksub}</font></div>
								</ScrollAnimation>
							</div>
               
						</div>
					</TabletBreakpoint>

					<PhoneBreakpoint> 
						<div className={style.Toppage_show_example_p}>

                
							<div  className={style.FeedView1_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[1].id_user + "/" + this.props.exampleAds[1].id_ad , this.props.exampleAds[1]  , this.props.exampleAds[1].url)}
								</ScrollAnimation>
							</div>
							<div  className={style.text_tweet_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<div  className={style.white_text}><font size="5">{Funcs.getTexts().exretweet}</font></div>
                 
									<div  className={style.white_text}><font size="3">{Funcs.getTexts().exretweetsub}</font></div>
								</ScrollAnimation>
							</div>

							<div  className={style.FeedView2_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									{FeedView("ad_page/" + this.props.exampleAds[3].id_user + "/" + this.props.exampleAds[3].id_ad , this.props.exampleAds[3]  , this.props.exampleAds[3].url)}
								</ScrollAnimation>
							</div>

							<div  className={style.text_follow_p}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<div  className={style.white_text}><font size="5">{Funcs.getTexts().exlook}</font></div>
                 
									<div  className={style.white_text}><font size="3">{Funcs.getTexts().exlooksub}</font></div>
								</ScrollAnimation>
							</div>
               
						</div>
					</PhoneBreakpoint> 
            
            
            
				</div>
			)
		}
	}
} export default ToppageShowExample