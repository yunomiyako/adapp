
import {Api} from "../../api/Api"



export const Funcs = {

    onClicktest() {
		var body = Api.testtm()
		body.then(
			body => {
				//console.log(body.oauth_token)

			}
		)


	}

}