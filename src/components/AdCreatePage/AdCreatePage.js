import React , {Component}  from "react"
import "./AdCreatePage.css"

// Components
import TitleCreateComponent from "./TitleCreateComponent"
import DecorateImageComponent from "./DecorateImageComponent"
import AdImageUploader from "./AdImageUploader"
import DescriptionCreateComponent from "./DescriptionCreateComponent"
import ReturnSelection from "./ReturnSelectionComponent"
import ReturnCreate from "./ReturnCreateComponent"

//TODO : これってクラスの外に書くものなのか・・・？
const buttons = [{id:1 , text:"画像とテキスト"} , {id:2 , text:"画像のみ"} , {id:3 , text:"テキストのみ"}]
class AdCreatePage extends Component {

	render() {
		return (
			<div className="AdCreatePage">
				<div className="AdCreatePage-TitleCreateComponent-frame">
					<h1>タイトル</h1>
					<TitleCreateComponent
						onChangeTitle= {(title)=>this.props.onChangeTitle(title)}
						title = {this.props.title}/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>枠の画像</h1>
					<DecorateImageComponent
						onSetImage={(image) => this.props.onSetImage(image)}
						title = {this.props.title}
						description = {this.props.description}
						image = {this.props.image}
					/>
				</div>

				<div className="AdCreatePage-DecorateImageComponent-frame">
					<h1>説明</h1>
					<DescriptionCreateComponent
						onChangeDescription={(text) => this.props.onChangeDescription(text)}
						description = {this.props.description}
					/>
				</div>

				<div className="AdCreatePage-AdImageUploader-frame">
					<h1>見せたい画像(任意)</h1>
					<AdImageUploader/>
				</div>

				<div className="AdCreatePage-ReturnSelection-frame">
					<h1>お返しの種類</h1>
					<ReturnSelection
						onClick={ (id) => this.props.onSetReturnType(id) }
						buttons={buttons}
					/>
				</div>

				<div className="AdCreatePage-ReturnCreate-frame">
					<h1>お返しの作成</h1>
					<ReturnCreate 
						returnType={this.props.returnType}
					/>
				</div>

			</div>
		)
	}
}

export default AdCreatePage
