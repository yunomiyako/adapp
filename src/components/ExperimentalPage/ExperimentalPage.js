import React , {Component}  from "react"

import style from "./ExperimentalPage.css"

import { CSSTransition  } from "react-transition-group"

//semantic UI
import { Button , Image } from "semantic-ui-react"

import { Storage } from "aws-amplify"
import fetchExampleAds from "../../api/fetchExampleAds";
class ExperimentalPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fire : false ,
			index : 0,
			files : [],
			imagePreviewUrl:""
		}
	}

	async onClickButton() {
		const res = await fetchExampleAds()

		this.setState({fire : !this.state.fire})
		if (this.state.index < 3) {
			this.setState({index : this.state.index + 1})
		} else {
			this.setState({index : 0})
		}
	}

	renderDiv() {
		const divStyle = { height : "200px" , width: "300px" , background:"white",  margin : "auto"}
		var list = []
		for(var i =0 ; i < this.state.index ; i++){
			list.push(
				<CSSTransition
					key = {i}
					timeout={500}
					classNames="goAwayAnimation">
					<div style={divStyle}>{i}</div>
				</CSSTransition>)
		}
		return (<React.Fragment>{list}</React.Fragment>)
	}

	fileSelectedHandler(e) {
		this.upload(e)
		e.preventDefault()

		let reader = new FileReader()
		let files = e.target.files

		reader.onloadend = () => {
			this.setState({
				files: files,
				imagePreviewUrl: reader.result
			})
		}

		reader.readAsDataURL(files[0])
	}

	upload(e) {
		const file = e.target.files[0]
		Storage.put("test/test/example.png", file, {
			contentType: "image/png"
		})
			.then (result => console.log(result))
			.catch(err => console.log(err))
	}

	render() {
		const styledComponetns = {
			color : "purple"
		}


		return (
			<div className="ExperimentalPage">

				<h3 className="testCase1">これは通常のCSSです。赤にします。名前を被らないように必要があります。</h3>
				<h3 className={style.testCase2}>これは:localで書いたCSSです。ここだけ青にします。名前の管理からだけ解放される。</h3>
				<h3 className="testCase3">これはjsに書かれたCSSです。緑にします。結局グローバルだしjs埋め込めないしメリットなさそう。</h3>
				<h3 style={styledComponetns}>これはstyledComponetnsです。紫にします。頻繁な計算があるスタイル以外では非推奨らしい</h3>
				<h3 style={style.dummyCSS}>これは存在しないlocal CSSです。</h3>
				<Button onClick={() => this.onClickButton()}>アニメーションボタン</Button>

				<div className={style.animation} style={{height : "200px" , width: "300px" , background:"white" , margin:"30px auto"}}>起動時のdiv</div>
				{/*
				 <CSSTransition
				 	in = {this.state.fire}
				 	classNames="goAwayAnimation"
				 	unmountOnExit
				 >
				 	<div style={{height : "200px" , width: "300px" , background:"white" , margin:"auto"}}>新しく登場してくるDIV</div>
				 </CSSTransition>
*/
				}

				<CSSTransition
					in = {this.state.index > 0}
					classNames="goAwayAnimation"
					timeout={1000}
					unmountOnExit
				>
					<div style={{height : "200px" , width: "300px" , background:"white" , margin:"30px auto"}}>新しく登場してくるDIV</div>
				</CSSTransition>

				<CSSTransition
					in = {this.state.index > 1}
					classNames="goAwayAnimation"
					timeout={1000}
					unmountOnExit
				>
					<div style={{height : "200px" , width: "300px" , background:"white" , margin:"30px auto"}}>新しく登場してくるDIV</div>
				</CSSTransition>

				<CSSTransition
					in = {this.state.index > 2}
					classNames="goAwayAnimation"
					timeout={1000}
					unmountOnExit
				>
					<div style={{height : "200px" , width: "300px" , background:"white" , margin:"30px auto"}}>新しく登場してくるDIV</div>
				</CSSTransition>
				<br/>
				<br/>
				<input style={{display : "none"}} type="file"
					onChange={(event) => this.fileSelectedHandler(event)}
					ref={fileInput => this.fileInput = fileInput}/>
				<Button onClick={() => this.fileInput.click()}>pick file</Button>
				<Image src={this.state.imagePreviewUrl}/>


				<style>{
					`
				.testCase3 {
					color: green;
				}
				`
				}
				</style>
			</div>
		)
	}
}

export default ExperimentalPage
