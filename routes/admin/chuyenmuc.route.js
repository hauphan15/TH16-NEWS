var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    chuyenmucModel.all()
        .then(rows => {
            res.render('admin/vwChuyenmuc/index', {
                chuyenmuc: rows,
            });
        }).catch(next);
})


router.post('/add', (req, res, next) => {
    chuyenmucModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    chuyenmucModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    var ID_ChuyenMuc = req.body.ID;
    Promise.all([chuyenmucModel.delete(req.body.ID),
    baivietModel.delete(ID_ChuyenMuc)])
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;