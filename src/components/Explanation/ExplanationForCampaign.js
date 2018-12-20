import React , {Component}  from "react"
import style from "./ExplanationForCampaign.css"
import ScrollAnimation from "react-animate-on-scroll"
import { fileDownload } from "../../api/fileDownload"
// import fig1 from "./camp1.png"
// import fig2 from "./camp2.png"
// import fig3 from "./camp3.png"
// import fig4 from "./camp4.png"
class ExplanationForCampaign extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fig1 : fileDownload("camp1.png" , "Explanation/"),
			fig2 : fileDownload("camp2.png" , "Explanation/"),
			fig3 : fileDownload("camp3.png" , "Explanation/"),
			fig4 : fileDownload("camp4.png" , "Explanation/")
		}
	}
	

	render() {
		
		
		return (
			<div className={style.ExplanationForCampaign}>
				<div className={style.texts}>
						
					<h3 className={style.text1}>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
						adApp キャンペーン（仮）
						</ScrollAnimation>
					</h3>
					<h3 className={style.text2}>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・<font color="#CD5C5C">[フォロー＆RTで応募完了！]</font>　⇦ これを誰でも簡単に作れるサービス
							</p>
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・<font color="#CD5C5C">自動で当選者を選んでDMを送るなど</font>の流れをadAppが一括して請け負います！</p> 
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・サイトを介しているから<font color="#CD5C5C">応募者からの信用もUP！</font>安心してフォロー&RTできます</p>
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・当選者一覧などの情報をサイト内で確認できる機能もあります!</p>
						</ScrollAnimation>
					</h3>
				
				</div>

				<div className={style.howToUse}>
					<div className={style.container}>
						<img className={style.fig1} src={this.state.fig1} />
						<h3 className={style.secondText1}>
							<p>景品を決める</p>
							<p><font size="5" >景品や当選人数は自分で決められます</font></p>
						</h3>

					</div>
					
					<div className={style.container2}>
						<img className={style.fig2} src={this.state.fig2} />
						<h3 className={style.secondText1}>
							<p>当選者へのメッセージや当選画像の設定</p>
							<p><font size="5" >DMで送るメッセージもカスタマイズ！</font></p>
						</h3>
					</div>

					{/* <div className={style.container3}>
						<img className={style.fig3} src={this.state.fig3} />
						<h3 className={style.secondText1}>
							<p>お支払いも簡単クレジットカード決済</p>
							<p><font size="5" >アマゾンギフト券ならすぐに景品に設定できます！</font></p>
						</h3>
					</div> */}

					<div className={style.container4}>
						<img className={style.fig4} src={this.state.fig4} />
						<h3 className={style.secondText1}>
							<p>応募者はこの3ステップで</p>
							<p><font size="5" >キャンペーンがRTで拡散されてフォロワー数もUP!</font></p>
						</h3>
					</div>

				</div>
			</div>
		)
	}	
}

export default ExplanationForCampaign
