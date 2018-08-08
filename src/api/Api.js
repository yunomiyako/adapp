// API
export const Api = {
	fetchJson: (url) => {
		return fetch(url).then( (response) => response.json()).then((body) =>body) },
	postJson: (url , params) => {
		return fetch(url ,
			{
				mode: "cors",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				} ,
				body: JSON.stringify(params)
			}).then( (response) => response.json() ).then((response) => response.body) } ,


	tmJson: (url , params) => {
		  return fetch(url, {
			mode: "cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			} ,
			body: JSON.stringify(params)
		}).then( (response) => response.json() ).then(response => response.body).then(body => JSON.parse(body))
	},

	fetchTest : () => {
		const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData"
		return Api.fetchJson(url)
	},
	postTest : () => {
		const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/testpost"
		//const url = "https://g3hcvlr082.execute-api.us-east-1.amazonaws.com/dev/test-re"
		const params = {"test1" : "こんにちは〜〜" , "test2" : "こんばんは〜"}
		return Api.postJson(url, params)
	} ,
	fetchDynamoTest : () => {
		const url = "https://m7naq149mk.execute-api.us-east-2.amazonaws.com/Stage/user"
		return Api.fetchJson(url)
	},
	postDynamoTest : (username) => {
		const url = "https://j4xg10jyb5.execute-api.us-east-2.amazonaws.com/Stage/user"
		const params = {"username" : username}
		return Api.postJson(url , params)
	},

	testtm : () => {

		const url =  "https://wxpi68iaul.execute-api.us-east-1.amazonaws.com/dev/testoauth-re"
		const params = {"tttttttttt":1}
		var body =  Api.tmJson(url , params)
		body.then(
			body => {
				//console.log(body.url)
				window.location.href = body.url
			}
		)

	}


}
