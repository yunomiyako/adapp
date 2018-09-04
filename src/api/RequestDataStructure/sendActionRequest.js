class sendActionRequest {
	constructer(data) {
		this.accessToken = data.accessToken
		this.accessTokenSecret = data.accessTokenSecret
		this.id_user = data.id_user
		this.id_ad = data.id_ad
	}
}

export default sendActionRequest