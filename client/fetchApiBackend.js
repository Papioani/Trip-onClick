/* var express = require('express');
var router = express.Router(); */


/* GET home page. */
// It's not a traditional frontend code intended to run in a browser directly. 
// In a backend environment (such as Node.js), you can use this code to make an HTTP request to an external API


const url = 'https://hotels4.p.rapidapi.com/locations/search?query=greece&locale=en_US';
const options = {  /* if I use this syntax in the backend , I should use exactly the same in the frontend!!!!!!!! */
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a',
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