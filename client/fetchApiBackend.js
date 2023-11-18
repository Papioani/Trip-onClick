/* var express = require('express');
var router = express.Router(); */


/* GET home page. */
// It's not a traditional frontend code intended to run in a browser directly. 
// In a backend environment (such as Node.js), you can use this code to make an HTTP request to an external API


const url = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=USA&locale=en_US&langid=1033&siteid=300000001';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '693a320c7amshf8a3f0479327cbap12dca4jsn254f4f98016a',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} 

module.exports = router;