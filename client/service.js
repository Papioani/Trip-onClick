var express = require('express');
var router = express.Router();

/* GET home page. */

const url = 'https://hotels4.p.rapidapi.com/locations/v3/search?q=new%20york&locale=en_US&langid=1033&siteid=300000001';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '49f816084dmsh095c2d416d9faecp17f6e1jsneccda23cd7d0',
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