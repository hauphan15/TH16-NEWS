var exress = require('express');
var taikhoanModel = require('../../models/taikhoan.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    taikhoanModel.loadDG()
        .then(rows => {
            res.render('admin/vwDocgia/index', {
                docgia: rows
            });
        }).catch(next);
})


router.post('/add', (req, res, next) => {
    taikhoanModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    taikhoanModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    taikhoanModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;