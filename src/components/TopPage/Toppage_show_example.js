import React , {Component}  from "react"
import style from "./Toppage_show_example.css"
import FeedView from "../CommonSemanticUI/FeedView"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"

class ToppageShowExample extends Component {

	renderDeskTop(index1 , index2) {
		const use_datas = [
			this.props.exampleAds[index1] , 
			this.props.exampleAds[index2]
		]
		const FeedViewClassNames = [
			style.FeedView1 , 
			style.FeedView2
		]

		const TextClassNames = [
			style.text_tweet , 
			style.text_follow
		]

		const childViews = use_datas.map((d , index) => {
			const mainText = AdTypeEnum.getByName(d.adType).mainText
			const subText = AdTypeEnum.getByName(d.adType).subText
			return (
				<React.Fragment>
					<div  className={FeedViewClassNames[index]}>
						<ScrollAnimation animateIn="fadeInUp"
							animateOnce={true}>
							{FeedView("ad_page/" + d.id_user + "/" + d.id_ad , d , d.url)}
						</ScrollAnimation>
					</div>
					<div  className={TextClassNames[index]}>
						<ScrollAnimation animateIn="fadeIn"
							animateOnce={true}>
							<p  className={style.white_text + " " + style.mainText}>{mainText}</p>
							<p  className={style.white_text + " " + style.subText}>{subText}</p>
						</ScrollAnimation>
					</div>
				</React.Fragment>
			)
		})
		return (
			<div className={style.Toppage_show_example}>
				{childViews}
			</div>
		)
	}

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
			return (
				<div className={style.Toppage_show_example_wrapper}>
					<DesktopBreakpoint>
						{this.renderDeskTop(0 , 2)}
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