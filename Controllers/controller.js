var countries = require('../Models/countries.json')

var loadCountries = function(req, res) {
	res.send(countries)
}

module.exports = {
	loadCountries : loadCountries
}