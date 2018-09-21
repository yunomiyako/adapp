
import PublishOauthURL from "../api/PublishOauthURL"
import {set_oauth_token , set_oauth_token_secret , get_oauth_token} from "../localStorage/twitter_access_token"
import { set_redirect_to } from "../localStorage/redirect_to";

export default async function(path) {
    const result = await PublishOauthURL()
    set_oauth_token(result.oauth_token)
    set_oauth_token_secret(result.oauth_token_secret)
    set_redirect_to(path || "/")
    window.location.href = result.url
} 