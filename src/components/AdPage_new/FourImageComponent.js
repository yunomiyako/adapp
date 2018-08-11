import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"



class FourImageComponent extends Component {
	render() {
		return (
			<div className={style.AdPage}>
				<div>
					<Image.Group size='big'>
						<Image src="http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg"></Image>
					</Image.Group>
				</div>
				<div>
					<Image.Group size='tiny'>
						<Image src="http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg"></Image>
						<Image src="http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg"></Image>
						<Image src="http://www.jma-net.go.jp/sat/data/web89/parts89/himawari9_first_image/tcr/tcr_m.jpg"></Image>
					</Image.Group>
				</div>

			</div>
		)
	}
}

export default FourImageComponent
