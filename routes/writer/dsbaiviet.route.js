var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var bvchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    dsbavietModel.all()
        .then(rows => {
            res.render('phongvien/danhsachbaiviet', {
                title:'Danh sách',
                dsbaiviet: rows
            });
        }).catch(next)
})


router.post('/xoa', (req, res, next) => {
    Promise.all([
        dsbavietModel.delete(req.body.ID_BVPV),
        bvchoduyetModel.delete1(req.body.ID_BVPV)])
        .then(() => {
            res.redirect('back');
        })
        .catch(next)
})



module.exports = router;