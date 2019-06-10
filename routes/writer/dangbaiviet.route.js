var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var baivietchoduyetcModel = require('../../models/baivietchoduyet.model');
var dsbbaivietPVModel = require('../../models/dsbaiviet_phongvien.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    var ID_BVPV = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    chuyenmucModel.all()
        .then(rows => {
            res.render('phongvien/dangbaiviet', {
                chuyenmuc: rows,
                ID_BVPV
            });
        }).catch(next);
})
 
router.post('/submit', (req, res, next) => {

    Promise.all([
        baivietchoduyetcModel.add(req.body),
        dsbbaivietPVModel.add(req.body)])
        .then(() => {
            res.redirect('/writer/dsbaiviet');
        })
        .catch(next)
})

module.exports = router;