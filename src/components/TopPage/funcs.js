import goTwitterLogin from "../../Utils/goTwitterLogin";
export const Funcs = {

	async onClicktest() {
		goTwitterLogin()
	} ,

	getTexts() {
	
		return {title:"Ad app",text2:"バズってるツイートと一緒に宣伝してもらおう！",
			text3:"あなたのツイートで宣伝&報酬GET!",tw_button_text:"Twitterで登録",button_text:"登録せずに使う",
			step1:"1,広告を作成しよう！",step2:"2,報酬を設定しよう！",step3:"３,ツイートして貰おう！",
			sectext1:"Ad appとは？"
		
		}
				
	}

}