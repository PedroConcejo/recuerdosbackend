const router = require('express').Router()

const {
  getAllPartners,
  getPartnersById

} = require('../controllers/partners.controller')

router.get('/', getAllPartners)
router.get('/:id', getPartnersById)

module.exports = router
