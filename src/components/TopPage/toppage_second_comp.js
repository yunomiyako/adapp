import React , {Component}  from "react"
import style from "./toppage_second_css.css"
import { Button, Icon } from "semantic-ui-react"
import {Funcs} from "./funcs"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"

class Toppage_second extends Component {


	render() {
		return (

			<div className={style.TopPage_second_wrapper}>
				<div className={style.TopPageTopPage_second}>
                
                
					
						
					<h3 className={style.text1}>{Funcs.getTexts().sectext1}</h3>

					<h3 className={style.text2}>
						<p>・Twitterを使った<font color="#CD5C5C">SNSアドバタイジングサービス</font></p>
						<br></br>
						<p>・プラットフォームにお金を払って広めてもらう従来型の広告とは<font color="#CD5C5C">異なった宣伝方法を提供</font></p>
						<br></br>
						<p>・宣伝してくれる人全員にお返しを上げることで<font color="#CD5C5C">SNSに広めてもらう</font>タイプの宣伝</p> 
					</h3>
					<DesktopBreakpoint>
						<div className={style.icons}>
						
							<div className={style.icon}>
								<i className="massive edit icon" ></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step1}</p>					
							</div>
							<div className={style.icon2}>
								<i className="massive gift icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
							</div>
							<div className={style.icon3}>
								<i className="massive twitter icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
							</div>

							
						</div>
					</DesktopBreakpoint>
					<TabletBreakpoint>
						<div className={style.icons}>
						
							<div className={style.icon}>
								<i className="massive edit icon" ></i>
								<p className = {style.icon_text} >{Funcs.getTexts().step1}</p>					
							</div>
							<div className={style.icon2}>
								<i className="massive gift icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
							</div>
							<div className={style.icon3}>
								<i className="massive twitter icon"></i>
								<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
							</div>

						
						</div>

					</TabletBreakpoint>
					<PhoneBreakpoint>
						
						
						<div className={style.picon}>
							<i className="huge edit icon" ></i>
							<p className = {style.icon_text}>{Funcs.getTexts().step1}</p>					
						</div>
						<div className={style.picon2}>
							<i className="huge gift outline icon"></i>
							<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
						</div>
						<div className={style.picon3}>
							<i className="huge twitter icon"></i>
							<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
						</div>
						
					</PhoneBreakpoint>




				</div>
            
			</div>
		)

	}



} export default Toppage_second