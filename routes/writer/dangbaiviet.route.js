var exress = require('express');
var baivietchoduyetcModel = require('../../models/baivietchoduyet.model');
var dsbbaivietPVModel = require('../../models/dsbaiviet_phongvien.model');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    var ID_BVPV = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    var ID_TK = res.locals.authUser.ID;
    chuyenmucModel.all()
        .then(rows => {
            res.render('phongvien/dangbaiviet', {
                title:"Đăng Bài",
                chuyenmuc: rows,
                ID_BVPV,
                ID_TK
            });
        }).catch(next);
})
 
router.post('/submit', (req, res, next) => {

    Promise.all([
        baivietchoduyetcModel.add(req.body),
        dsbbaivietPVModel.add(req.body)])
        .then(() => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;