var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var bvchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();


router.post('/', (req, res) => {
    var id = req.body.ID_BVPV;

    dsbavietModel.singel(id)
        .then(rows => {
            res.render('phongvien/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(err => {
            console.log(err);
        });
})


router.post('/capnhat', (req, res) => {
    Promise.all([
        dsbavietModel.update(req.body),
        bvchoduyetModel.update(req.body)])
        .then(() => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;