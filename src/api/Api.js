// API
export const Api = {
	fetchJson: (url) => {
		return fetch(url).then( (response) => response.json()).then((body) => body)
	},
	fetchTest : () => {
		const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData"
		return Api.fetchJson(url)
	}
}
