var exress = require('express');
var taikhoanModel = require('../../models/taikhoan.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    taikhoanModel.loadBTV()
        .then(rows => {
            res.render('admin/vwBientapvien/index', {
                bientapvien: rows
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
    var entity = {
        ID: req.body.ID,
        ButDanh: req.body.ButDanh,
        ID_CMQL: req.body.ID_ChuyenMuc
    }
    taikhoanModel.update(entity)
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