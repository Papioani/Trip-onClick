var express = require('express');
var router = express.Router();

/* GET home page. */

/* const url = 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb';
const options = {
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
} */

const url = 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb';
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