function fetchJson(url) {
	return fetch(url, {
		method:"GET"
	}).then((response) => response.json()).then((json) => json)
}

export function fetchTest() {
	const url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData"
	return fetchJson(url)
}
