const {Router} = require('express')
const addressControllers = require('../controllers/AddressControllers')

const router = Router()

router.get('/address', addressControllers.read)

router.get('/address/:id',  addressControllers.findId)
router.get('/address/schedule/:id', addressControllers.schedule)
router.get('/address/user/:id', addressControllers.scheduleUser)

router.post('/address', addressControllers.create)

router.delete('/address/:id', addressControllers.delete)

module.exports = router