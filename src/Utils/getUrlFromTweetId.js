export default function(id_user, id_tweet) {
	const baseUrl = "https://www.twitter.com/"

	return baseUrl + id_user + "/status/" + id_tweet
}