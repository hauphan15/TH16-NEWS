var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();


router.get('/:tag', (req, res, next) => {
    var tag = req.params.tag;

    baivietModel.allByTag(tag)
        .then(rows => {
            res.render('xemtheotag/tag', {
                baiviet: rows,
                tag
            })
        })
        .catch(next)

})


module.exports = router;