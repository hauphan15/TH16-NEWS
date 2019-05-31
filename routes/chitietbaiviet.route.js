var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();


router.get('/:id', (req, res, next) => {
    var id = req.params.id;

    baivietModel.singel(id)
        .then(rows => {
            res.render('baivietchitiet/baiviet', {
                baivietchitiet: rows[0]
            })
        })
        .catch(next)

})



module.exports = router;