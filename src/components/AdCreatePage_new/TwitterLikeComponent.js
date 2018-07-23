import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Comment  , Image , Grid , Modal , Button , Form , TextArea} from "semantic-ui-react"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

//stateから注入する
const tempImageSrc = [
	"https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg" ,
	"http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg",
]

class TwitterLikeComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalOpen : false ,
			provisionalText : ""
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


	shapeList(list) {
		const distance = 4 - list.length
		if(distance > 0) {
			for(var i = 0; i < distance; i++) {
				list.push("")
			}
		} else if (distance < 0) {
			for(var i = 0 ; i < -distance ; i++) {
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
		return (<Grid columns={2}>
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
						<div className={style.imageFrame}>
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
							onChange = {(event) => this.onChangeText(event.target.value)}
						 />
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
		const srcList = this.shapeList(tempImageSrc)
		const text = this.props.adObject.text
		return (
			<div className="TwitterLikeComponent">
				{this.CommentExampleMetadata(srcList , text)}
			</div>
		)
	}
}

export default TwitterLikeComponent
