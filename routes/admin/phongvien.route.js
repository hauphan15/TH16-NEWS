var exress = require('express');
var taikhoanModel = require('../../models/taikhoan.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    taikhoanModel.loadPV()
        .then(rows => {
            res.render('admin/vwPhongvien/index', {
                phongvien: rows
            });
        }).catch(next);
})


router.post('/add', (req, res, next) => {
    phongvienModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    phongvienModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    phongvienModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;