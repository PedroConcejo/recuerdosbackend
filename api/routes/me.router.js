
const router = require('express').Router()

const profileRouter = require('./profile.router')
const roomsRouter = require('./rooms.router')
const stylesRouter = require('./styles.router')
const ratingsRouter = require('./ratings.router')

router.use('/profile', profileRouter)
router.use('/rooms', roomsRouter)
router.use('/styles', stylesRouter)
router.use('/ratings', ratingsRouter)

module.exports = router

/* const {
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
  updateStyle,
  createRating,
  getPartnerRatings,
  deleteRating,
  getRating,
  updateRating
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

router.post('/ratings', createRating)
router.get('/ratings', getPartnerRatings)
router.delete('/ratings/:ratingid', deleteRating)
router.get('/ratings/:ratingid', getRating)
router.put('/ratings/:ratingid', updateRating)

module.exports = router

/const {
  getMe,
  updateUser,
  deleteMe
} = require('../controllers/profile.controller')

router.get('/', getMe)
router.put('/', updateUser)
router.delete('/', deleteMe)

const {
  startRoom,
  getMyRooms,
  getRoom,
  deleteRoom,
  newMsn
} = require('../controllers/rooms.controller')

router.post('/rooms', startRoom)
router.get('/rooms', getMyRooms)
router.get('/rooms/:roomid', getRoom)
router.delete('/rooms/:roomid', deleteRoom)
router.post('/rooms/:roomid', newMsn)

const {
  createStyle,
  getMystyles,
  deleteStyle,
  getStyle,
  updateStyle
} = require('../controllers/styles.controller')

router.post('/styles', createStyle)
router.get('/styles', getMystyles)
router.delete('/styles/:styleid', deleteStyle)
router.get('/styles/:styleid', getStyle)
router.put('/styles/:styleid', updateStyle)

const {
 createRating,
  getPartnerRatings,
  deleteRating,
  getRating,
  updateRating
} = require('../controllers/styles.controller')

router.post('/ratings', createRating)
router.get('/ratings', getPartnerRatings)
router.delete('/ratings/:styleid', deleteRating)
router.get('/ratings/:styleid', getRating)
router.put('/ratings/:styleid', updateRating)
*/
