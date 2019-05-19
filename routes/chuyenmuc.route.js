var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var chuyenmucModel = require('../models/chuyenmuc.model');
var router = exress.Router();


router.get('/:id/baiviet', (req, res) => {
    var id = req.params.id;
    var p = baivietModel.allByCat(id);

    // //
    // var q = chuyenmucModel.singel(id);
    // var row;
    // q.then(rows => {
    //     row = rows;
    //     console.log(row);
    // });
    // //

    p.then(rows => {
        for (const cm of res.locals.lcChuyenmuc) {
            if (cm.ID == +id) {
                cm.isActive = true;
            }
        }
        res.render('vwBaiviet/byCat', {
            baiviet: rows,
            CM: rows[0]
        });
    }).catch(err => {
        console.log(err);
    });
})

module.exports = router;