var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();

router.get('/:id/baiviet', (req, res) => {
    var id = req.params.id;
    var p = baivietModel.allByCat(id);
    p.then(rows => {

        for (const cm of res.locals.lcChuyenmuc) {
            if (cm.ID == +id) {
                cm.isActive = true;
            }
        }

        res.render('vwBaiviet/byCat', {
            baiviet: rows
        });
    }).catch(err => {
        console.log(err);
    });
})

module.exports = router;