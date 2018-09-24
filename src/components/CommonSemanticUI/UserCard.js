import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"

//semantic UI
import { Card , Image   } from "semantic-ui-react"
import { get_userdetail } from "../../localStorage/user_detail"
import UserDetailDataStructure from "../../domain/UserDetailDataStructure"
import convertBigImageUrl from "../../Utils/convertBigImageUrl"
class UserCard extends Component {
	renderLink() {
		return (this.props.link || false ? 
			<Card.Content extra>
				<a>
                    作成した広告はこちら>
				</a>
			</Card.Content> : "")
	}

	render() {
		//TODO : 外側から値を受けられるように
		var name = ""
		var icon_url = ""
		var screen_name = ""
		var description = ""
		if(!this.props.user_detail) {
			const user_detail = new UserDetailDataStructure(get_userdetail() || {})
			name = user_detail.username
			icon_url = convertBigImageUrl(user_detail.profile_image_url)
			screen_name = user_detail.screen_name
			description = user_detail.description
		}
        
		return (
			<div className={style.UserCard}>
				<Card>
					<Image src={icon_url} />
					<Card.Content>
						<Card.Header>{name}</Card.Header>
						<Card.Meta>
							{screen_name}
						</Card.Meta>
						<Card.Description>{description}</Card.Description>
					</Card.Content>

					{this.renderLink()}

				</Card>
			</div>
		)
	}
}

export default UserCard
