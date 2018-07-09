// API
export const Api = {
	fetchJson: (url) => {
		return fetch(url).then( (response) => response.json()).then((body) => body)
	},
	postJson: (url , params) => {
		return fetch(url ,
			{
				mode: "cors",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				} ,
				body: JSON.stringify(params)
			}).then( (response) => response.json() ).then((body) => body)
	}
	,
	fetchTest : () => {
		const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData"
		return Api.fetchJson(url)
	},
	postTest : () => {
		const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/testpost"
		const params = {"test1" : "test~~" , "test2" : "test dayo~~~"}
		return Api.postJson(url, params)
	}
}
