var mongoose = require('mongoose')

var countrySchema = mongoose.Schema({
	name       : String,
	frenchName : String,
	localName  : String,
	region     : String,
	travelled   : Boolean
})

module.exports = mongoose.model('Country', countrySchema)