const router = require('express').Router()
const questionsRouter = require('./questionsRouter')
const usersRouter = require('./userRouter')
const homeCTR = require('../controllers/home')

router.get('/', (req, res) => {
    homeCTR.findAll(req, res)
})

router.use('/questions', questionsRouter)
router.use('/users', usersRouter)


module.exports = router