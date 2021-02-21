const Ideal = require('../Models/Mideal')

module.exports = {
	index : (req,res) => {
		res.console.log('Berhasil mengambil Data')
	},
	create : (req,res) => {
		res.console.log('Halaman Create')
	},
	store : (res,req) => {
		res.console.log('Insert Function')
	},
	show : (req,res) => {},
	edit : (req,res) => {},
	update : (req,res) => {},
	delete : (req,res) => {},
}