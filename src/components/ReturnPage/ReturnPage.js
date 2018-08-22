import React , {Component}  from "react"
import getReturnData from "../../domain/getReturnData"

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
class ReturnPage extends Component {
	constructor(props) {
		super(props)
		const type = this.props.match.params.type
		this.state = {returnType : type}

		const data = getReturnData(type , 0)
		console.log(data)
	}

	render() {
		return (
			<div>
				<br/>
				<br/>
				<br/>
				{this.state.returnType}
			</div>
		)
	}
}

export default ReturnPage
