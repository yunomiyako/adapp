import React , {Component}  from "react"
import style from "./TopPage2.css"
import { Button, Icon ,Responsive } from "semantic-ui-react"
import {Funcs} from "./funcs"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"





class Top_Phonecomponent extends Component {

	render() {
		return (
			<div className={style.TopPage2}>
					
				<div className={style.title}>
					<DesktopBreakpoint>
						<h3 className={style.text1}>Ad app</h3>
					</DesktopBreakpoint>	

					<PhoneBreakpoint>
						<h3 className={style.text1_2}>Ad app</h3>
					</PhoneBreakpoint>

					<TabletBreakpoint>
						<h3 className={style.text1_3}>Ad app</h3>
					</TabletBreakpoint>

				</div>



				<div className={style.Text}>

					<DesktopBreakpoint>	
						<h2 className={style.text2}>バズってるツイートと一緒に宣伝してもらおう！</h2>
					</DesktopBreakpoint>

					<TabletBreakpoint>	
						<h2 className={style.text2}>バズってるツイートと一緒に宣伝してもらおう！</h2>
					</TabletBreakpoint>

					<PhoneBreakpoint>
						<h2 className={style.text2_2}>バズってるツイートと一緒に宣伝してもらおう！</h2>
					</PhoneBreakpoint>

					<PhoneBreakpoint>
						<h2 className={style.text3_2}>あなたのツイートで宣伝&報酬GET!</h2>
					</PhoneBreakpoint>


					<TabletBreakpoint>
						<h2 className={style.text3}>あなたのツイートで宣伝&報酬GET!</h2>
					</TabletBreakpoint>



					<DesktopBreakpoint>
						<h2 className={style.text3}>あなたのツイートで宣伝&報酬GET!</h2>
					</DesktopBreakpoint>

				</div>
				<div className={style.Button}>
					<div className= {style.twitter_button}>
                    



						<PhoneBreakpoint>
							<Button onClick={()=>Funcs.onClicktest()} color='twitter' size='mini'>
								<Icon name='twitter' /> Twitterで登録
							</Button>
						</PhoneBreakpoint>

						<TabletBreakpoint>
							<Button onClick={()=>Funcs.onClicktest()} color='twitter' size='huge'>
								<Icon name='twitter' /> Twitterで登録
							</Button>
						</TabletBreakpoint>

						<DesktopBreakpoint>
							<Button onClick={()=>Funcs.onClicktest()} color='twitter' size='massive'>
								<Icon name='twitter' /> Twitterで登録
							</Button>
						</DesktopBreakpoint>



					</div>
				</div>
				<div className={style.Button2}>
					<div className= {style.login_button}>
						<PhoneBreakpoint>
							<Button color='black'size='mini'>登録せずに使う</Button >
						</PhoneBreakpoint>

						<TabletBreakpoint>
							<Button color='black'size='huge'>登録せずに使う</Button >
						</TabletBreakpoint>

						<DesktopBreakpoint>
							<Button color='black'size='massive'>登録せずに使う</Button >
						</DesktopBreakpoint>



					</div>
				</div>
            
				<div className={style.Footer}>			
					<ul>
						<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">お問い合わせ</a></p>
						<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">利用規約</a></p>
						<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">プライバシーポリシー</a></p>
					</ul>		
				</div>

				<div className={style.icon}>

					<i class="big edit icon" ></i>
					<p className = {style.icon_text2}>1,広告を作成しよう！ </p>

				</div>

				<div className={style.icon2}>

					<i class="big star outline icon"></i>
					<p className = {style.icon_text2}>2,報酬を設定しよう！</p>
				</div>

				<div className={style.icon3}>

					<i class="big twitter icon"></i>
					<p className = {style.icon_text2}>３,ツイートして貰おう！</p>
				</div>
            
			</div>
		)

	}


}

export default Top_Phonecomponent