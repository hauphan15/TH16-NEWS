var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();


router.get('/', (req, res, next) => {
    res.render('ketquatimkiem/index');
})

router.post('/submit', (req, res, next) => {
    var test = req.body.txtsearch;
    baivietModel.search(test)
        .then(rows => {
            res.render('ketquatimkiem/index', {
                title:'Tìm kiếm',
                baiviet: rows,
                test: test
            })
        })
        .catch(next)

})

module.exports = router;