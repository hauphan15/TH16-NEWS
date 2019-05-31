var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var chuyenmuc = require('../models/chuyenmuc.model');
var router = exress.Router();


router.get('/:id/baiviet', (req, res, next) => {
    var id = req.params.id;

    var page = req.query.page || 1;
    if (page < 1) page = 1;

    var limit = 5;
    var offset = (page - 1) * limit;


    Promise.all([
        baivietModel.pageByCM(id, limit, offset),
        baivietModel.countByCM(id)])
        .then(([rows, count_rows]) => {
            for (const cm of res.locals.lcChuyenmuc) {
                if (cm.ID == +id) {
                    cm.isActive = true;
                }
            }

            var total = count_rows[0].total;
            var nPages = Math.floor(total / limit);
            if (total % limit > 0) nPages++;
            var pages = [];
            for (i = 1; i <= nPages; i++) {
                var obj = { value: i, active: i === +page };
                pages.push(obj);
            }

            res.render('vwBaiviet/byCat', {
                baiviet: rows,
                pages
            })
        })
        .catch(next)
})

router.get('/:id/:id_cmc/baiviet', (req, res, next) => {
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
        }).catch(next);
})


module.exports = router;