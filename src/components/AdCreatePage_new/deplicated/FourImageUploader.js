import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Grid , Image} from "semantic-ui-react"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

/*バグるので修正したさある*/
class FourImageUploader extends Component {

	constructor(props) {
		super(props)
		this.state = {
			imagePreviewUrl : ["" ,"","",""]
		}
	}


	//TODO: ファイルサイズ、拡張子の指定
	fileSelectedHandler(e) {
		e.preventDefault()

		//reduxへ送信
		let files = e.target.files
		const newObj = dotProp.set(this.props.adObject , "images" , files)
		this.props.onChangeAdObject(newObj)

		//プレビュー準備
		for(var i = 0 ; i <  files.length ; i++) {
			let reader = new FileReader()

			//TODO : もうちょっとまともなやり方
			const f_generator = (i) => () => {
				//var state = dotProp.set(this.state, "imagePreviewUrl.${i}", reader.result)
				var state = {...this.state,
					imagePreviewUrl: [
						...this.state.imagePreviewUrl.slice(0, i ),
						reader.result,
						...this.state.imagePreviewUrl.slice(i  + 1)
					]}
				this.setState(state)
			}

			const f = f_generator(i)


			reader.onloadend = () => {
				f()
			}

			reader.readAsDataURL(files[i])
		}
	}

	shapeList(list) {
		const distance = 4 - list.length
		if(distance > 0) {
			for(var i = 0; i < distance; i++) {
				list.push("")
			}
		} else if (distance < 0) {
			for(i = 0 ; i < -distance ; i++) {
				list.pop()
			}
		}
		return list
	}

	ImageOrUploader(src){
		if (src) {
			return (<Image src={src} size='small'/>)
		} else {
			return (<Image className={style.image} src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>)
		}
	}

	//TODO : 画像をdivサイズに合わせて、はみ出た部分を無視する(twitter本家と同じにしたい)
	//TODO : 画像はタップすると拡大するモーダルが開く方が良い？
	GridExampleDividedNumber(srcs){
		return (
			<Grid columns={2}>
				<Grid.Row>
					<Grid.Column >
						{this.ImageOrUploader(srcs[0])}
					</Grid.Column>
					<Grid.Column>
						{this.ImageOrUploader(srcs[1])}
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						{this.ImageOrUploader(srcs[2])}
					</Grid.Column>
					<Grid.Column>
						{	this.ImageOrUploader(srcs[3])}
					</Grid.Column>
				</Grid.Row>
			</Grid>)
	}

	render() {
		const srcList = this.shapeList(this.state.imagePreviewUrl)

		return (
			<div>
				<div className={style.imageFrame} onClick={() => this.fileInput.click()}>
					<input style={{display : "none"}} type="file" multiple
						onChange={(event) => this.fileSelectedHandler(event)}
						ref={fileInput => this.fileInput = fileInput}/>
					{this.GridExampleDividedNumber(srcList)}
				</div>
			</div>
		)
	}
}

export default FourImageUploader
