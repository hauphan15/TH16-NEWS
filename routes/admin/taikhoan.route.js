var exress = require('express');
var taikhoanModel = require('../../models/taikhoan.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    taikhoanModel.all()
        .then(rows => {
            res.render('admin/vwTaikhoan/index', {
                taikhoan: rows
            });
        }).catch(next);
})


router.post('/update', (req, res, next) => {
    var entity = {
        ID: req.body.ID,
        Quyen: req.body.Quyen
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