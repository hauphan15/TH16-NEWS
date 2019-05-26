var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var bvchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    dsbavietModel.all()
        .then(rows => {
            res.render('phongvien/danhsachbaiviet', {
                dsbaiviet: rows
            });
        }).catch(err => {
            console.log(err);
        });
})


router.post('/xoa', (req, res) => {
    Promise.all([
        dsbavietModel.delete(req.body.ID_BVPV),
        bvchoduyetModel.delete(req.body.ID_BVPV)])
        .then(() => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})



module.exports = router;