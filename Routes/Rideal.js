const express = require('express')
const router = express.Router()
const idealController = require('../Controllers/Cideal')

router.route('ideal')
		.get(idealController.index)
		.post(idealController.store)

router.get('/ideal/create',idealController.create)
router.get('/ideal/:id',idealController.show)
router.get('/ideal/:id/edit',idealController.edit)
router.put('/ideal/:id',idealController.update)
router.delete('/ideal/:id',idealController.delete)

module.exports = router