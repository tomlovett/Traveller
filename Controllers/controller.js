var Country = require('../Models/model.js')

var loadCountries = function(req, res) {
	Country.find({}, function(err, docs) {
		res.send(docs)
	})
}

var searchCountries = function(req, res) {
	var search = new RegExp(req.body.search)
	console.log(search)
	Country.find({name: search}, function(err, docs) {
		console.log('docs :', docs)
		res.send(docs)
	})
}

var markTravelled = function(req, res) {
	
}

module.exports = {
	loadCountries   : loadCountries, 
	searchCountries : searchCountries,
	markTravelled   : markTravelled
}