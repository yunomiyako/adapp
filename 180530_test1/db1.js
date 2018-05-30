const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'react',
	password : 'react',
	database : '180529_react1'
});

const app = express();
app.use(cors());

app.get('/posts', function (req, res) {
	// connection.connect();
	connection.query('SELECT * FROM t1', function (error, results, fields){
		if (error) throw error;
		console.log('aa');

		var resultJson = JSON.stringify(results);
		resultJson = JSON.parse(resultJson);
		var apiResult = {};
		apiResult.data = resultJson;
		res.json(apiResult);
	});

	// connection.end();
});

app.listen(3001, () => {
	console.log('Go to http://localhost:3000/posts to see t1');
});