var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var chuyenmuc =require('../models/chuyenmuc.model');
var router = exress.Router();

router.get('/:id/baiviet', (req, res) => {
    var id = req.params.id;
    var p = baivietModel.allByCat(id);
    var q=chuyenmuc.singel(id);
    var row;
    q.then(rows1=>{
        row=rows1;
    });


    p.then(rows2 => {

        for (const cm of res.locals.lcChuyenmuc) {
            if (cm.ID == +id) {
                cm.isActive = true;
            }
        }
        res.render('vwBaiviet/byCat', {
            baiviet: rows2,
            CM:row[0]
        });
    }).catch(err => {
        console.log(err);
    });
})

module.exports = router;