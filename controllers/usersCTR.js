const {
    User,
    Question
} = require('../models/index')
class Controller {
    static userView(req, res) {
        User.findAll({
                where: {
                    id: req.session.userId
                }
            })
            .then((result) => {
                Question.findAll({
                        where: {
                            UserId: req.session.userId
                        }
                    })
                    .then((resQ) => {
                        res.render('user', {
                            data: result[0],
                            dataQ: resQ
                        })
                    })
            })
    }
    static loginView(req, res) {
        res.render('login', {
            err: null
        })
    }

    static login(req, res) {
        let user = req.body.username
        let pass = req.body.password
        User.findAll({
                where: {
                    username: user,
                    password: pass
                }
            })
            .then((result) => {
                if (result.length === 1) {
                    req.session.isLogin = true
                    req.session.userId = result[0].id
                    res.redirect('/')
                } else {
                    let err = 'Username/ password is wrong'
                    res.render('login', {
                        err: err
                    })
                }
            })
    }

    static registerView(req, res) {
        res.render('register', {
            err: null,
            notif: null
        })
    }

    static register(req, res) {
        let {
            username,
            password,
            firstName,
            lastName
        } = req.body
        User.create({
                username: username,
                password: password,
                FirstName: firstName,
                LastName: lastName,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .then((result) => {
                res.render('register', {
                    err: null,
                    notif: true
                })
                res.redirect('/users/login')
            })
            .catch((err) => {
                let error = err.errors
                res.render('register', {
                    err: error,
                    notif: null
                })
            })
    }

    static updateView(req, res) {
        res.render('update', {
            err: null,
            notif: null
        })
    }

    static update(req, res) {
        User.update(req.body)
            .then((result) => {
                res.render('update', {
                    err: null,
                    notif: true
                })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = Controller