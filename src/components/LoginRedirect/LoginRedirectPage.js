import React , {Component}  from "react"

import {set_access_token , 
    set_access_token_secret , 
get_oauth_token , get_oauth_token_secret} from "../../localStorage/twitter_access_token"
import QueryString from "../../Utils/QueryString"
import OauthRequest from "../../api/OauthRequest"
import fetchUserDetail from "../../api/fetchUserDetail"
import {redirectToTopPage, redirectTo} from "../Redirect/redirect"
import { Dimmer, Loader } from 'semantic-ui-react'
import { get_redirect_to } from "../../localStorage/redirect_to";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirecTo : ""
        }
    }

	componentDidMount() {
		this.getToken()
	}

	async getToken() {
		const oauth_token = get_oauth_token()
		const oauth_token_secret = get_oauth_token_secret()
        const oauth_verifier = QueryString.oauth_verifier

        const result = await OauthRequest(oauth_token , oauth_token_secret , oauth_verifier)
        
        const access_token = result["access_token"]
        const access_token_secret = result["access_token_secret"]
        set_access_token(access_token)
        set_access_token_secret(access_token_secret)

        //userdetailを取得して目的の値になっているか確認する
        const user_detail = await fetchUserDetail()
        console.log(user_detail)

        const path = get_redirect_to() || "/"
        this.setState({
            redirecTo : path
        })
	}
    


	render() {
        if(this.state.redirectTo || this.state.redirecTo == "/") {
            return redirectTo(this.state.redirecTo)
        }

		return (
            <div>
                <Dimmer active>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
            </div>
		)
	}
}

export default App
