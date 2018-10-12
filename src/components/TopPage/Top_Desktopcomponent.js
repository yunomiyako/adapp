import React , {Component}  from "react"
import style from "./TopPage2.css"
import { Button, Icon } from "semantic-ui-react"
import {Funcs} from "./funcs"
import { CSSTransition } from "react-transition-group"





class Top_Component extends Component {
	
  
	render() {
		return (
			<div className={style.TopPage_wrapper}>
				<div className={style.TopPage}>
					<CSSTransition
						in
						classNames="tran"
						appear={true}
					>
						<div className={style.title}>
				
							<h3 className={style.text1}>{Funcs.getTexts().title}</h3>
				

						</div>

					
					</CSSTransition>
					<CSSTransition
						in
						classNames="tran"
						appear={true}
					>
						<div className={style.Text}>

					
							<h2 className={style.text2}>{Funcs.getTexts().text2}</h2>
		
							<h2 className={style.text3}>{Funcs.getTexts().text3}</h2>
					

						</div>
					</CSSTransition>
					<CSSTransition
						in
						classNames="tran"
						appear={true}
					>
						<div className={style.Button}>
							<div className= {style.twitter_button}>
								


						
								<Button onClick={()=>Funcs.onClicktest()} color='twitter' size='massive'>
									<Icon name='twitter' /> {Funcs.getTexts().tw_button_text}
								</Button>
					



							</div>
						</div>
					</CSSTransition>
					<CSSTransition
						in
						classNames="tran"
						appear={true}
					>
						<div className={style.Button2}>
							<div className= {style.login_button}>

								<Button color='black'size='massive'>{Funcs.getTexts().button_text}</Button >
							</div>
						</div>
					</CSSTransition>
					
				</div>
				<div className={style.TopPage2ndlayer}>
					<div className={style.icon}>

						<i className="massive edit icon" ></i>
						<p className = {style.icon_text}>{Funcs.getTexts().step1} </p>					
					</div>

					<div className={style.icon2}>

						<i className="massive star outline icon"></i>
						<p className = {style.icon_text}>{Funcs.getTexts().step2}</p>
					</div>

					<div className={style.icon3}>

						<i className="massive twitter icon"></i>
						<p className = {style.icon_text}>{Funcs.getTexts().step3}</p>
					</div>
				</div>	
				<div className={style.Footerback}>	
					<div className={style.Footer}>			
						<ul>
							<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">お問い合わせ</a></p>
							<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">利用規約</a></p>
							<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">プライバシーポリシー</a></p>
						</ul>		
					</div>
				</div>
				
			</div>
		)

	}


}

export default Top_Component