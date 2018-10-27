import React , {Component}  from "react"

import {set_access_token , 
    set_access_token_secret , 
get_oauth_token , get_oauth_token_secret, get_access_token} from "../../localStorage/twitter_access_token"
import QueryString from "../../Utils/QueryString"
import OauthRequest from "../../api/OauthRequest"
import {redirectTo} from "../Redirect/redirect"
import { Dimmer, Loader } from 'semantic-ui-react'
import { get_redirect_to } from "../../localStorage/redirect_to";
import RefreshUserDetail from "../../api/RefreshUserDetail";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirecTo : "" , 
            redirect : false
        }
    }

	componentDidMount() {
		this.getToken()
	}

	async getToken() {
        if(QueryString.denied) {
            window.location.href = "/"
        }
        //リダイレクト先をあらかじめセットしておく
        const path = get_redirect_to() || "/"
        this.setState({
            redirecTo : path
        })

        if(get_access_token()) {
            //ログインずみならトップへ飛ばす
            this.setState({
                redirect : true
            })
        }
		const oauth_token = get_oauth_token()
		const oauth_token_secret = get_oauth_token_secret()
        const oauth_verifier = QueryString.oauth_verifier

        const result = await OauthRequest(oauth_token , oauth_token_secret , oauth_verifier)
        
        const access_token = result["access_token"]
        const access_token_secret = result["access_token_secret"]
        set_access_token(access_token)
        set_access_token_secret(access_token_secret)

        //userdetailを更新する
        const user_detail = await RefreshUserDetail()
        
        this.setState(
            {redirect : true}
        )
	}
    


	render() {
        if(this.state.redirect) {
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
