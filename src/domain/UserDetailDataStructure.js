class UserDetailDataStructure {
	constructor(data){
		this.id_user = data.id_user || "NoIdUser" 
		this.username = data.username || data.name || "anonymous"
		this.screen_name = data.screen_name || ""
		this.profile_image_url = data.profile_image_url || "" 
		this.description = data.description || ""
		//その他の要素も随時追加 
	}
}

export default UserDetailDataStructure
