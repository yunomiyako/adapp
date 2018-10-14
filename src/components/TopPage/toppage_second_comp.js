import React , {Component}  from "react"
import style from "./toppage_second_css.css"
import {Funcs} from "./funcs"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

class Toppage_second extends Component {
	render() {
		return (
			<div className={style.TopPage_second_wrapper}>
				<div className={style.TopPageTopPage_second}>
						
					<h3 className={style.text1}>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							{Funcs.getTexts().sectext1}
						</ScrollAnimation>
					</h3>
					<h3 className={style.text2}>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・Twitterを使った<font color="#CD5C5C">SNSアドバタイジングサービス</font></p>
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・プラットフォームにお金を払って広めてもらう従来型の広告とは<font color="#CD5C5C">異なった宣伝方法を提供</font></p>
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
						
							<p>・宣伝してくれる人全員にお返しを上げることで<font color="#CD5C5C">SNSに広めてもらう</font>タイプの宣伝</p> 
						</ScrollAnimation>
					</h3>
					<DesktopBreakpoint>
						
						<div className={style.icons}>
						
							<div className={style.icon}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive edit icon" ></i>
									<p className = {style.icon_text}>{Funcs.getTexts().step1}</p>	
								</ScrollAnimation>				
							</div>
							<div className={style.icon2}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive gift icon"></i>
									<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
								</ScrollAnimation>
							</div>
							<div className={style.icon3}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive twitter icon"></i>
									<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
								</ScrollAnimation>
							</div>

							
						</div>
					</DesktopBreakpoint>
					<TabletBreakpoint>
						<div className={style.icons}>
						
							<div className={style.icon}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive edit icon" ></i>
									<p className = {style.icon_text} >{Funcs.getTexts().step1}</p>	
								</ScrollAnimation>				
							</div>
							<div className={style.icon2}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive gift icon"></i>
									<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
								</ScrollAnimation>
							</div>
							<div className={style.icon3}>
								<ScrollAnimation animateIn="fadeInUp"
									animateOnce={true}>
									<i className="massive twitter icon"></i>
									<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
								</ScrollAnimation>
							</div>

						
						</div>

					</TabletBreakpoint>
					<PhoneBreakpoint>
						
						
						<div className={style.picon}>
							<ScrollAnimation animateIn="fadeInUp"
								animateOnce={true}>
								<i className="huge edit icon" ></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step1}</p>	
							</ScrollAnimation>				
						</div>
						<br></br>
						<div className={style.picon2}>
							<ScrollAnimation animateIn="fadeInUp"
								animateOnce={true}>
								<i className="huge gift outline icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
							</ScrollAnimation>
						</div>
						<br></br>
						<div className={style.picon3}>
							<ScrollAnimation animateIn="fadeInUp"
								animateOnce={true}>
								<i className="huge twitter icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
							</ScrollAnimation>
						</div>
						
					</PhoneBreakpoint>




				</div>
            
			</div>
		)

	}



} export default Toppage_second