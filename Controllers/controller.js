var Country = require('../Models/model.js')

var loadCountries = function(req, res) {
	Country.find({}, function(err, docs) {
		res.send(docs)
	})
}

var searchCountries = function(req, res) {
	console.log(req)
}

module.exports = {
	loadCountries   : loadCountries, 
	searchCountries : searchCountries
}