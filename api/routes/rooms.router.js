const router = require('express').Router()

const {
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn,
  getMessageByRoom
} = require('../controllers/rooms.controller')

router.post('/', startRoom)
router.get('/', getMyRooms)
router.get('/:roomid', getRoom)
router.delete('/:roomid', deleteRoom)
router.post('/:roomid', newMsn)
router.get('/:roomid/msg', getMessageByRoom)

module.exports = router
