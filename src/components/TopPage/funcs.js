import goTwitterLogin from "../../Utils/goTwitterLogin";
export const Funcs = {

	async onClicktest() {
		goTwitterLogin()
	} ,

	getTexts() {
	
		return {title:"adApp🙂",text2:"宣伝をもっとみんながお手軽に",
			text3:"",tw_button_text:"Twitterで登録(2秒)",button_text:"登録せずに使う(0秒)",
			step1:"1. 宣伝を作る",step2:"2. お返しを設定する",step3:"３. 宣伝してもらう",
			sectext1:"adAppとは？",extweet:"ツイートしてもらおう",extweetsub:"タイムラインに広めて欲しいツイートを",
			exfollow:"フォローしてもらおう",exfollowsub:"フォロワーを増やしたい時にも",exretweet:"リツイートして欲しい！"
			,exretweetsub:"このツイートをバズらせたい、そんな時に",exlook:"見てほしい。。。",exlooksub:"ただ見てほしい、それだけでも"
		}
				
	}

}