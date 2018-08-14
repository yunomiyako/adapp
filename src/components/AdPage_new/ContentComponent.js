import React , {Component}  from "react"
import { } from "semantic-ui-react"
import style from "./AdPage.css"

class ContentComponent extends Component {
	render() {
		return (
			<div>
				<div>
					<h4 className={style.content}>
					こんな星を作っています。まだまだ未完成ですが、どんどん進化をしていて作っていて楽しいです。
					文字数にあまりがあるのでちょっと叫びます。
					ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
					(140字)
					</h4>
				</div>
			</div>
		)
	}
}

export default ContentComponent
