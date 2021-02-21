const mongoose = require('mongoose')
const {Schema} = mongoose

const IdealSchema = new Schema({
	name : String,
	height : Number,
	weight : Number,
	ket : String
},{timestamps : true})

const Ideal = mongoose.model('Ideal',IdealSchema)

module.exports = Ideal