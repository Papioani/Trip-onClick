/* var express = require('express');
var router = express.Router(); */


/* GET home page. */
// It's not a traditional frontend code intended to run in a browser directly. 
// In a backend environment (such as Node.js), you can use this code to make an HTTP request to an external API


const url = 'https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=1648672&locale=en-gb';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '314a76c0f8mshba931602e18bfcfp1f7807jsn79a0981b285a',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
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