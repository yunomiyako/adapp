import React , {Component}  from "react"

import {set_access_token , 
    set_access_token_secret , 
get_oauth_token , get_oauth_token_secret, get_access_token} from "../../localStorage/twitter_access_token"
import QueryString from "../../Utils/QueryString"
import WebhookRegisterRequest from "../../api/WebhookRegisterRequest"
import {redirectTo} from "../Redirect/redirect"
import { Dimmer, Loader } from 'semantic-ui-react'
import { get_redirect_to } from "../../localStorage/redirect_to";
import RefreshUserDetail from "../../api/RefreshUserDetail";

class WebhookRedirectPage extends Component {
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
        
		const oauth_token = get_oauth_token()
		const oauth_token_secret = get_oauth_token_secret()
        const oauth_verifier = QueryString.oauth_verifier

        const result = await WebhookRegisterRequest(oauth_token , oauth_token_secret , oauth_verifier)
        
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

export default WebhookRedirectPage
