const router = require('express').Router()

const {
  createStyle,
  getMystyles,
  deleteStyle,
  getStyle,
  updateStyle
} = require('../controllers/styles.controller')

router.post('/', createStyle)
router.get('/', getMystyles)
router.delete('/:styleid', deleteStyle)
router.get('/:styleid', getStyle)
router.put('/:styleid', updateStyle)

module.exports = router
