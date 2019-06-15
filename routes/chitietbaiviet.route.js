var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var binhluanModel = require('../models/binhluan.model');
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



module.exports = router;