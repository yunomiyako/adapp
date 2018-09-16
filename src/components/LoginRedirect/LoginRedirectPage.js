import React , {Component}  from "react"

import {set_access_token , 
    set_access_token_secret , 
get_oauth_token , get_oauth_token_secret} from "../../localStorage/twitter_access_token"
import QueryString from "../../Utils/QueryString"
import OauthRequest from "../../api/OauthRequest"
import {redirectToTopPage} from "../Redirect/redirect"
import { Dimmer, Loader } from 'semantic-ui-react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ac : ""
        }
    }

	componentDidMount() {
		this.getToken()
	}

	async getToken() {
		const oauth_token = get_oauth_token()
		const oauth_token_secret = get_oauth_token_secret()
        const oauth_verifier = QueryString.oauth_verifier

        console.log(oauth_token)
        console.log(oauth_token_secret)
        console.log(oauth_verifier)
        const result = await OauthRequest(oauth_token , oauth_token_secret , oauth_verifier)
        
        const access_token = result["access_token"]
        const access_token_secret = result["access_token_secret"]
        set_access_token(access_token)
        set_access_token_secret(access_token_secret)

        //TODO : redirect to somewhere
        this.setState({
            ac : access_token
        })
	}
    


	render() {
        if(this.state.ac) {
            return redirectToTopPage()
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
