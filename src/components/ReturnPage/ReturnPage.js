import React , {Component}  from "react"
import getReturnData from "../../domain/getReturnData"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import style from "./ReturnPage.css"
import { Rating} from "semantic-ui-react"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"

/* TODO
1. returnTypeによって異なるお返し画面を描画する
タイプ1(textAndImage) : 画像(複数枚)とテキスト
タイプ2(textOnly) : テキストのみ（長文の可能性がある）
タイプ3(premium) : プレミアム限定(現在は何も表示しなくていい)
タイプ4(lottery) : 抽選を行ったり抽選結果を表示する(現在は何も表示しなくていい)
※ getReturnDataを編集していかなる入力に対してもレイアウトできるかテストするといい

2. ユーザが星でお返しのよさを評価ができる仕組み

3. お返しの特別感が演出できるといいな
*/

const changeUrlToOriginal = (image_list) => {
	console.log(image_list)
	return image_list.map((img) => {
		return {original : img , thumbnail : img , sizes:100}
	})
}

class ReturnPage extends Component {
	constructor(props) {
		super(props)
		//const type = this.props.match.params.type
		
		//this.data = getReturnData(type,0)
		//console.log(this.data)

		this.state = {
			returnType : null,
			image_list : null,
			returnObject: null
		}


		/*if(type=="textAndImage" ){
			this.state.image_list = changeUrlToOriginal(this.data.image_list)
		}*/
		
	}

	get_state(type,obj,urls){
		this.state.returnType = type
		this.state.returnObject = obj

		if(type=="textAndImage" ){
			this.state.image_list = changeUrlToOriginal(urls)
		}

		return this.state.returnType

	}

	for_segment(text){

		return(

			<div className="ui piled segment">
						
				<h4 className="ui header">Return</h4>
				<p>
					{text}
				</p>
			</div>
		)


	}

	type_check(ret_type){
		
		if (ret_type=="textAndImage") {
			return(
				<div className ={style.textAndImage} >
					<PhoneBreakpoint>
						<div className ={style.ImagePhone} >
							< ImageGallery items={this.state.image_list} /> 
						</div>
						
						{this.for_segment(this.state.returnObject.text)}
					
					</PhoneBreakpoint>
					<DesktopBreakpoint>
						<div className ={style.Image} >
							< ImageGallery items={this.state.image_list} /> 
						</div>
						<div className ={style.segment} >
							{this.for_segment(this.state.returnObject.text)}
						</div>
					</DesktopBreakpoint>
					<TabletBreakpoint>
						<div className ={style.Image} >
							< ImageGallery items={this.state.image_list} /> 
						</div>
						<div className ={style.segment} >
							{this.for_segment(this.state.returnObject.text)}
						</div>
					</TabletBreakpoint>
					
					
						
				</div>	
			)	
		}else if (ret_type=="textOnly"){
			return(
				<div className ={style.Text_for_only} >
					<PhoneBreakpoint>					
						{this.for_segment(this.state.returnObject.text)}				
					</PhoneBreakpoint>
					<DesktopBreakpoint>
						<div className ={style.segment} >
							{this.for_segment(this.state.returnObject.text)}
						</div>
					</DesktopBreakpoint>
					<TabletBreakpoint>
						<div className ={style.segment} >
							{this.for_segment(this.state.returnObject.text)}
						</div>
					</TabletBreakpoint>
				</div>
			)
		} 

	}

	render() {
		return (
			
			<div className ={style.ReturnPage} >
	
				<div className ={style.ReturnPage} >
					{this.type_check(this.get_state(this.props.returnType,this.props.returnObject,this.props.urls))}
				</div>
				
			</div>
		)
	}
}

export default ReturnPage
