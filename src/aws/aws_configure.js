export default {
	// OPTIONAL - if your API requires authentication 
	Auth: {
		// REQUIRED - Amazon Cognito Identity Pool ID
		identityPoolId: "ap-northeast-1:62e8666f-2e39-4600-912c-a7c9332e2450",
		// REQUIRED - Amazon Cognito Region
		region: "ap-northeast-1", 
		// OPTIONAL - Amazon Cognito User Pool ID
		userPoolId: "ap-northeast-1_SHqZXcVuV", 
		// OPTIONAL - Amazon Cognito Web Client ID
		userPoolWebClientId: "5khuql00f2mviggho5ligs92db",
	},
	API: {
		endpoints: [
			{
				name: "adApp",
				endpoint: " https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp"
			}
		]
	} , 
	Storage: {
		bucket: "adapp-image-folder", //REQUIRED -  Amazon S3 bucket
		region: "ap-northeast-1", //OPTIONAL -  Amazon service region
	}
}