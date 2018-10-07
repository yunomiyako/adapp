class UserDetailDataStructure {
	constructor(data){
		this.ad_list = data.ad_list || [], 
		this.return_list = data.return_list || [],
		this.loading = data.loading || false
	}
}

export default UserDetailDataStructure
