var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var chuyenmuc = require('../models/chuyenmuc.model');
var router = exress.Router();

router.get('/:id/:id_cmc/baiviet', (req, res) => {
    var id = req.params.id;
    var id_cmc = req.params.id_cmc;

    baivietModel.allByCMC(id_cmc)
        .then(rows => {
            for (const cm of res.locals.lcChuyenmuc) {
                if (cm.ID == +id) {
                    cm.isActive = true;
                }
            }
            res.render('vwBaiviet/byCat', {
                baiviet: rows,
                cmc: rows[0]
            });
        }).catch(err => {
            console.log(err);
        });
})


module.exports = router;