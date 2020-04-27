
const router = require('express').Router()

const {
  getMe,
  updateUser,
  deleteMe,
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn,
  createStyle,
  getMystyles,
  deleteStyle,
  getStyle,
  updateStyle
} = require('../controllers/me.controller')

router.get('/', getMe)
router.put('/', updateUser)
router.delete('/', deleteMe)
router.post('/rooms', startRoom)
router.get('/rooms', getMyRooms)
router.get('/rooms/:roomid', getRoom)
router.delete('/rooms/:roomid', deleteRoom)
router.post('/rooms/:roomid', newMsn)
router.post('/styles', createStyle)
router.get('/styles', getMystyles)
router.delete('/styles/:styleid', deleteStyle)
router.get('/styles/:styleid', getStyle)
router.put('/styles/:styleid', updateStyle)

module.exports = router
