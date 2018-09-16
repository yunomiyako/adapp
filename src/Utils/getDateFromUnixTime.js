//unix timeから時刻に変えます
export default function(unixTime) {
	// Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	var date = new Date(unixTime*1000)
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var dates = date.getDate()
	var hour = date.getHours()
	var min = date.getMinutes()
	var sec = date.getSeconds()
	//var time = dates + " " + month + " " + year
	const time = month + "月" + dates + "日" + hour + "時"
	return time
}