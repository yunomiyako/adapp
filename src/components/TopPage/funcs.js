import goTwitterLogin from "../../Utils/goTwitterLogin";
export const Funcs = {

	async onClicktest() {
		goTwitterLogin()
	} ,

	getTexts() {
	
		return {title:"Ad app",text2:"バズってるツイートと一緒に宣伝してもらおう！",
			text3:"あなたのツイートで宣伝&報酬GET!",tw_button_text:"Twitterで登録",button_text:"登録せずに使う",
			step1:"1,広告を作成しよう！",step2:"2,報酬を設定しよう！",step3:"３,ツイートしてもらおう！",
			sectext1:"Ad appとは？",extweet:"ツイートしてもらおう",extweetsub:"タイムラインに広めて欲しいツイートを",
			exfollow:"フォローしてもらおう",exfollowsub:"フォロワーを増やしたい時にも",exretweet:"リツイートして欲しい！"
			,exretweetsub:"このツイートをバズらせたい、そんな時に",exlook:"ツイートを見てほしい。。。",exlooksub:"ただ見てほしい、それだけでも"
		}
				
	}

}