import React , {Component}  from "react"
import style from "./Toppage_show_example.css"
import FeedView from "../CommonSemanticUI/FeedView"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import {Funcs} from "./funcs"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"

class ToppageShowExample extends Component {

	renderTablet(index1 , index2) {
		const use_datas = [
			this.props.exampleAds[index1] , 
			this.props.exampleAds[index2]
		]

		const childViews = use_datas.map(d => {
			const mainText = AdTypeEnum.getByName(d.adType).mainText
			const subText = AdTypeEnum.getByName(d.adType).subText
			
			return (
				<div className={style.ExampleGroupVertical}>
					<div  className={style.FeedView1_t}>
						<ScrollAnimation animateIn="fadeInUp"
							animateOnce={true}>
							{FeedView("ad_page/" + d.id_user + "/" + d.id_ad , d , d.url)}
						</ScrollAnimation>
					</div>
					<div  className={style.text_tweet_t}>
						<ScrollAnimation animateIn="fadeIn"
							animateOnce={true}>
							<p  className={style.white_text + " " + style.mainText}>{mainText}</p>
							<p  className={style.white_text + " " + style.subText}>{subText}</p>
						</ScrollAnimation>
					</div>
				</div>
			)
		})

		return (
			<div className={style.Toppage_show_example_t}>
				{childViews}
			</div>
		)
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
						{this.renderTablet(0 , 2)}
					</TabletBreakpoint>

					<PhoneBreakpoint> 
						{this.renderTablet(0 , 2)}
					</PhoneBreakpoint> 
            
            
            
				</div>
			)
		}
	}
} export default ToppageShowExample