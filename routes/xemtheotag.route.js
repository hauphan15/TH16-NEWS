var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();


router.get('/:tag', (req, res, next) => {
    var tag = req.params.tag;
    var title='Tag - ' + tag;

    baivietModel.allByTag(tag)
        .then(rows => {
            res.render('xemtheotag/tag', {
                title,
                baiviet: rows,
                tag
            })
        })
        .catch(next)

})


module.exports = router;