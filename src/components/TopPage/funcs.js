
import PublishOauthURL from "../../api/PublishOauthURL"
import {set_oauth_token , set_oauth_token_secret , get_oauth_token} from "../../localStorage/twitter_access_token"
export const Funcs = {

	async onClicktest() {
		const result = await PublishOauthURL()
		console.log(result)
		set_oauth_token(result.oauth_token)
		set_oauth_token_secret(result.oauth_token_secret)
		window.location.href = result.url
	},

	getTexts() {
	
		return {title:"Ad app",text2:"バズってるツイートと一緒に宣伝してもらおう！",
			text3:"あなたのツイートで宣伝&報酬GET!",tw_button_text:"Twitterで登録",button_text:"登録せずに使う",
			step1:"1,広告を作成しよう！",step2:"2,報酬を設定しよう！",step3:"３,ツイートして貰おう！"}
				
	}

}