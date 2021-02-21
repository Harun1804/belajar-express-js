const Ideal = require('../Models/Mideal')

module.exports = {
	index : (req,res) => {
		Ideal.find((err,berat) => {
			if(err) console.log(err)
			console.log(err)
			res.render('berat/index',{berat})
		})
	},
	create : (req,res) => {
		res.render('berat/create')
	},
	store : (req,res) => {
		const {name,height,weight} = req.body
		const bbIdeal = ((height - 100) - ((height - 100) * 0.1))
		let keterangan = ''

		if(weight < bbIdeal){
			keterangan = 'Kurus'
		}else if(weight == bbIdeal){
			keterangan = 'Ideal'
		}else{
			keterangan = 'Berat berlebih'
		}

		Ideal.create({
			name : name,
			height : height,
			weight : weight,
			ket : keterangan
		},(err,hasil) => {
			if(err) console.log(err)
			console.log(hasil)

			res.redirect('/ideal')
		})
	},
	show : (req,res) => {
		const id = req.params.id
		Ideal.findById(id,(err,ideal) => {
			if(err) console.log(err)
			console.log(ideal)
			res.render('berat/show',{ideal})
		})
	},
	edit : (req,res) => {
		const id = req.params.id
		Ideal.findById(id,(err,ideal) => {
			if(err) console.log(err)

			console.log(ideal)
			res.render('berat/edit',{ideal})
		})
	},
	update : (req,res) => {
		const id = req.params.id

		const {name,height,weight} = req.body
		const bbIdeal = ((height - 100) - ((height - 100) * 0.1))
		let keterangan = ''

		if(weight < bbIdeal){
			keterangan = 'Kurus'
		}else if(weight == bbIdeal){
			keterangan = 'Ideal'
		}else{
			keterangan = 'Berat berlebih'
		}

		Ideal.updateOne({_id : id},{
			name : name,
			height : height,
			weight : weight,
			ket : keterangan
		},(err,ideal) => {
			if(err) console.log(err)

			console.log(ideal)
			res.redirect('/ideal/'+id)
		})
	},
	delete : (req,res) => {
		const id = req.params.id

		Ideal.findById(id,(err,ideal) => {
			if(err) console.log(err)
			ideal.remove()

			res.redirect('/ideal')
		})
	},
}