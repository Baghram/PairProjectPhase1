const {
    Question,
    Result,
    User
} = require('../models')
class Controller {
    static findAll(req, res) {
        Question.findAll({
                include: [User]
            })
            .then((listQuestions) => {
                if (!req.session.userId) {
                    res.render('home', {
                        data: listQuestions,
                        dataLogin: null
                    })
                } else {
                    User.findAll({
                            where: {
                                id: req.session.userId
                            }
                        })
                        .then((result) => {
                            let temp = result[0]
                            res.render('home', {
                                data: listQuestions,
                                dataLogin: result[0]
                            })
                        })
                }


            })
    }
}

module.exports = Controller