var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var binhluanModel = require('../models/binhluan.model');
var auth = require('../middlewares/auth');
var router = exress.Router();


router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Promise.all([
        baivietModel.singel(id),
        baivietModel.CungCm(id),
        binhluanModel.allByIdBv(id),
        baivietModel.updateView(id)])
        .then(([rows, cm, bl]) => {
            res.render('baivietchitiet/baiviet', {
                title: rows[0].TenChuyenMuc + ' - ' + rows[0].TenBaiViet,
                baivietchitiet: rows[0],
                cungcm: cm,
                binhluan: bl
            })
        })
        .catch(next)

});

router.post('/:id/binhluan', auth, (req, res, next) => {
    var date = new Date();
    var entity = {
        ID_BV: req.params.id,
        ID_Docgia: res.locals.authUser.ID,
        TenDocGia: res.locals.authUser.HoTen,
        NoiDung: req.body.BinhLuan,
        LuocThich: 0,
        Ngay: date
    }
    binhluanModel.add(entity)
        .then(() => {
            res.redirect('back');
        })
        .catch(next)

})


module.exports = router;