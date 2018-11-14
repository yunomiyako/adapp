import React , {Component}  from "react"
import style from "./Explanation.css"
import TSCMerged from "../TopPage/TSE_merged"
import fig1 from "./1fig.png"
import fig1text from "./1.png"
import fig2 from "./2fig.png"
import fig2text from "./2.png"
import rec1 from "./rec1.png"
import rec2 from "./rec2.png"
import rec3 from "./rec3.png"
import fetchExampleAds from "../../api/fetchExampleAds"
import getUrlsFromKeys from "../../api/getUrlsFromKeys"
import ScrollAnimation from "react-animate-on-scroll"
import Footer from "../Footer/Footer"
import {Button} from "semantic-ui-react"
import { Link } from "react-router-dom"


class Explanation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			logined : false,
			exampleAds:[],
			loading:true
		}
	}

	componentDidMount() {
		
		this.get_example()
		
	}
	
	async get_example() {
        const examples = await fetchExampleAds()
		const headImages = examples.map(ad => {
			if(ad.adObject) {
				if(ad.adObject.images) {
					return ad.adObject.images[0]
				}
			}
			return undefined
		})
		const urls = await getUrlsFromKeys(headImages)
		const examplesWithImage = examples.map( (ad , index) => {
			ad.url = urls[index]
			return ad
		})
        
        this.setState(
			{
                exampleAds: examplesWithImage,
                loading:false 
			}

        )
	}
	

	render() {
		
		
		return (
			<div className={style.Explanation}>
				<div className={style.textWrapper}>
					<p className={style.toptext}>簡単２ステップで宣伝を作ろう！</p>
				</div>
				<div className={style.container}>
				<ScrollAnimation animateIn="fadeInUp"
					animateOnce={true}>
					<div className={style.container1}>
						<img className={style.fig1} src={fig1}  />
						<img className={style.fig1text} src={fig1text}  />
										
					</div>

					<div className={style.container2}>
						<img className={style.fig2} src={fig2} />
						
						<img className={style.fig2text} src={fig2text} />
						
					</div>
					</ScrollAnimation>

				</div>		

				<div className={style.text2Wrapper}>
					<p className={style.secondtext}>こんな人にオススメ・・・</p>
				</div>
				<div className={style.secondcontainer}>

					<div className={style.secondcontainer1}>
					<ScrollAnimation animateIn="fadeInUp"
					animateOnce={true}>
						<img className={style.rec1} src={rec1}  />
						<img className={style.rec2} src={rec2}  />
						<img className={style.rec3} src={rec3}  />
						</ScrollAnimation>
					</div>
					
				</div>

				<div className={style.text3Wrapper}>
					<p className={style.text3}>もっと気軽にこんな宣伝も！</p>
				</div>
				<div >
					
					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {true}/>
					<TSCMerged exampleAds = {this.state.exampleAds} loading = {this.state.loading} reverse = {false}/>
			
					
				</div>
				 
				<div className={style.button}>
				
					<Link to={"/all_ad"}>
						<Button 
							basic
							fluid
							color={"red"}
							size="massive"
							onClick={() => null}>						
							{"宣伝一覧を見る"}	
						</Button>
					</Link>
					<div className={style.arrow}>
					  {/* <img className={style.arrow} src={arrow} alt="Logo" /> */}
					  <p className={style.text4}>まずはどんな宣伝があるか見てみよう！</p>
					</div>
				</div>
				
				
				 

				 <Footer/>
			</div>
				
		)
	}	
}

export default Explanation
