var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var bvchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();

router.get('/:idtk', (req, res, next) => {

    Promise.all([
        dsbavietModel.allByTK_DD(req.params.idtk),
        dsbavietModel.allByTK_DC(req.params.idtk)])
        .then(([rows1, rows2]) => {
            res.render('phongvien/danhsachbaiviet', {
                title: 'Danh sách',
                bvdaduyet: rows1,
                bvdangcho: rows2,
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