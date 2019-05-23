var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var baivietchoduyetcModel = require('../../models/baivietchoduyet.model');
var dsbbaivietPVModel = require('../../models/dsbaiviet_phongvien.model');
var router = exress.Router();

router.get('/', (req, res) => {
    Promise.all([chuyenmucModel.all(),
    dsbbaivietPVModel.countAll()])
        .then(([rows,total]) => {
            res.render('phongvien/dangbaiviet', {
                chuyenmuc: rows,
                total: total[0].total
            });
        }).catch(err => {
            console.log(err);
        });
})

router.post('/submit', (req, res) => {

    Promise.all([
        baivietchoduyetcModel.add(req.body),
        dsbbaivietPVModel.add(req.body)])
        .then(() => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;