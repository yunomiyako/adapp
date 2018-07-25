import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Comment  , Image , Grid , Modal , Button , Form , TextArea} from "semantic-ui-react"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class TwitterLikeComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalOpen : false ,
			provisionalText : "",
			imagePreviewUrl : ["" ,"","",""]
		}
	}

	show(){
		this.setState({ modalOpen: true })
	}

	close(doSave) {
		if(doSave) {
			const newObj = dotProp.set(this.props.adObject , "text" , this.state.provisionalText)
			this.props.onChangeAdObject(newObj)
		} else {
			this.setState({provisionalText : this.props.adObject.text})
		}
		this.setState({ modalOpen : false})
	}

	onChangeText(text) {
		this.setState({provisionalText : text})
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
				window.console.log(i)
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

	CommentExampleMetadata(srcList , text) {
		const defaultMessage = "〇〇さん" + "(@username)" + "からの宣伝です。"
		return (<Comment.Group>
			<Comment>
				<Comment.Avatar as='a' src='https://pbs.twimg.com/profile_images/1019012325641105408/jzgm_3e3_400x400.jpg' />
				<Comment.Content>
					<Comment.Author>誰かの名前</Comment.Author>
					<Comment.Metadata>
						<div>@darekanoid</div>
					</Comment.Metadata>
					<Comment.Text>
						<div onClick={() => this.show()}>
							{defaultMessage}
							<br/>
							<br/>
							{text ? text : <a >ここをクリックして宣伝文を記述</a>}
						</div>

						{/*ファイルアップロードのクリックリスナーはここ*/}
						<div className={style.imageFrame} onClick={() => this.fileInput.click()}>
							<input style={{display : "none"}} type="file" multiple
								onChange={(event) => this.fileSelectedHandler(event)}
								ref={fileInput => this.fileInput = fileInput}/>
							{this.GridExampleDividedNumber(srcList)}
						</div>
					</Comment.Text>
				</Comment.Content>
			</Comment>

			<Modal size="small" open={this.state.modalOpen} onClose={() => this.close(true)}>
				<Modal.Header>ツイート内容</Modal.Header>
				<Modal.Content>
					<Form>
						<TextArea autoHeight
							placeholder='宣伝内容' rows={3}
							value={this.state.provisionalText}
							onChange = {(event) => this.onChangeText(event.target.value)}/>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button negative onClick={() => this.close(false)}>No</Button>
					<Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={() => this.close(true)}/>
				</Modal.Actions>
			</Modal>
		</Comment.Group>)
	}



	render() {
		//const srcList = this.shapeList(tempImageSrc)
		const srcList = this.shapeList(this.state.imagePreviewUrl)

		const text = this.props.adObject.text
		return (
			<div className="TwitterLikeComponent">
				{this.CommentExampleMetadata(srcList , text)}
			</div>
		)
	}
}

export default TwitterLikeComponent
