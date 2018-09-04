class UserDetailDataStructure {
	constructor(data){
		this.id_user = data.id_user || "NoIdUser" 
		this.username = data.username || "anonymous"
		//その他の要素も随時追加 
	}
}

export default UserDetailDataStructure
