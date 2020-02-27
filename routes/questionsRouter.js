const router = require('express').Router()
const controller = require('../controllers/questionsCTR')


router.get('/add', (req, res, next) => {

    req.session.isLogin === true ? next() : res.redirect('/')
}, controller.addView)

router.post('/add', (req, res) => {
    controller.add(req, res)
})

router.get('/:id', (req, res, next) => {
    req.session.isLogin === true ? next() : res.redirect('/')
}, controller.addPollView)

router.post('/:id', (req, res, next) => {
    req.session.isLogin === true ? next() : res.redirect('/')
}, controller.addPoll)

router.get('/delete/:id', (req, res) => {
    controller.delete(req, res)
})

router.get('/result/:id', (req, res) => {
    controller.result(req, res)
})


module.exports = router