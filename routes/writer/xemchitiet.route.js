var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var bvchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();


router.post('/', (req, res, next) => {
    var id = req.body.ID_BVPV;

    dsbavietModel.singel(id)
        .then(rows => {
            res.render('phongvien/xemchitiet', {
                title:'Xem chi tiết',
                xemchitiet: rows[0]
            })

        })
        .catch(next);
})


router.post('/capnhat', (req, res, next) => {
    Promise.all([
        dsbavietModel.update(req.body),
        bvchoduyetModel.update(req.body)])
        .then(() => {
            res.redirect('/writer/dsbaiviet');
        })
        .catch(next)
})

module.exports = router;