class sendActionRequest {
	constructer(data) {
		this.accessToken = data.accessToken
		this.accessTokenSecret = data.accessTokenSecret
		this.id_user = data.id_user
		this.id_ad = data.id_ad
		this.receiver = data.receiver //これは認証情報から取得するためheaderかも。でもaccessTokenとかはなりすまし不可能だからいらない・・・？
	}
}

export default sendActionRequest