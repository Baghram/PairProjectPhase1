const {
    Question,
    User,
    Result
} = require('../models')
const percentage = require('../helper/percentage')
const roundcount = require('../helper/roundcount')
class Controller {
    static addView(req, res) {
        let userId = req.session.userId
        res.render('addQ', {
            userId: userId
        })
    }

    static add(req, res) {
        Question.create(req.body)
            .then((result) => {
                res.redirect('/')
            })
    }

    static addPollView(req, res) {
        let idQuestion = req.params.id
        Question.findAll({
                where: {
                    id: idQuestion
                }
            })
            .then((result) => {
                let userId = req.session.userId
                res.render('answerQ', {
                    data: result[0],
                    userId
                })
            })
    }

    static addPoll(req, res) {
        Result.create({
                UserId: req.session.userId,
                QuestionId: req.params.id,
                answer: req.body.answer
            })
            .then((hasil) => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Question.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                res.redirect('/users')
            })
    }

    static result(req, res) {
        let setuju;
        let tidaksetuju;
        let count;
        let hasil;
        Result.findAndCountAll({
                where: {
                    QuestionId: req.params.id,
                    answer: "SETUJU"
                }
            })
            .then(function (result) {
                setuju = result
                return Result.findAndCountAll({
                    where: {
                        QuestionId: req.params.id,
                        answer: "TIDAK SETUJU"
                    }
                })
            })
            .then(function (result) {
                tidaksetuju = result
                return Result.findAndCountAll({
                    where: {
                        QuestionId: req.params.id,
                        answer: "TIDAK TAHU"
                    }
                })
            })
            .then(function (result) {
                let temp = []
                temp.push(setuju)
                temp.push(tidaksetuju)
                temp.push(result)
                count = roundcount(temp)
                hasil = percentage(count)
                return Question.findAll({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(function (result) {
                res.render('result', {
                    dataQ: result,
                    count: count,
                    percent: hasil
                })
            })
            .catch(function (err) {
                res.send("error")
            })

    }
}

module.exports = Controller