import React , {Component}  from "react"
import style from "./toppage_second_css.css"
import {Funcs} from "./funcs"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

class Toppage_second extends Component {

	renderIcons() {
		const icons = [
			{icon : "massive edit icon" , text : Funcs.getTexts().step1},
			{icon : "massive gift icon" , text : Funcs.getTexts().step2},
			{icon : "massive twitter icon" , text : Funcs.getTexts().step3}
		]
		const iconViews = icons.map(i => {
			return (
				<div className={style.picon} key={i.icon}>
					<ScrollAnimation animateIn="fadeInUp"
						animateOnce={true}>
						<i className= {i.icon} ></i>
						<p className = {style.icon_text}>{i.text}</p>	
					</ScrollAnimation>				
				</div>)
		})

		return (
			<div className={style.icons_vertical}>
				{iconViews}
			</div>
		)
	}

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
							<p>・宣伝してくれる人全員にお返しを上げることで<font color="#CD5C5C">SNSに広めてもらう</font>タイプの宣伝</p> 
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・プラットフォームにお金を払って広めてもらう従来型の広告とは<font color="#CD5C5C">異なった宣伝方法を提供</font></p>
							<br></br>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight"
							animateOnce={true}>
							<p>・言葉で説明するのは難しいので、ぜひ使ってみてください🙂</p>
						</ScrollAnimation>
					</h3>
					{this.renderIcons()}




				</div>
            
			</div>
		)

	}



} export default Toppage_second