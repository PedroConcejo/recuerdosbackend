const router = require('express').Router()

const {
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn
} = require('../controllers/rooms.controller')

router.post('/', startRoom)
router.get('/', getMyRooms)
router.get('/:roomid', getRoom)
router.delete('/:roomid', deleteRoom)
router.post('/:roomid', newMsn)

module.exports = router
