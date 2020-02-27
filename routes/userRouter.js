const router = require('express').Router()
const usersCTR = require('../controllers/usersCTR')

router.get('/login', (req, res) => {
    usersCTR.loginView(req, res)
})

router.post('/login', (req, res) => {
    usersCTR.login(req, res)
})

router.get('/register', (req, res) => {
    usersCTR.registerView(req, res)
})

router.post('/register', (req, res) => {
    usersCTR.register(req, res)
})

router.get('/update', (req, res) => {
    usersCTR.updateView(req, res)
})
router.post('/update', (req, res) => {
    usersCTR.update(req, res)
})

router.get('/', (req, res, next) => {

    req.session.isLogin === true ? next() : res.redirect('/')
}, usersCTR.userView)

module.exports = router