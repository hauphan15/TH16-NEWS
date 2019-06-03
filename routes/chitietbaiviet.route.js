var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var binhluanModel = require('../models/binhluan.model');
var router = exress.Router();

 
router.get('/:id', (req, res, next) => {
    var id = req.params.id;

    Promise.all([
        baivietModel.singel(id),
        baivietModel.CungCm(id),
        binhluanModel.allByIdBv(id)])
        .then(([rows, cm, bl]) => {
            res.render('baivietchitiet/baiviet', {
                baivietchitiet: rows[0],
                cungcm: cm,
                binhluan: bl
            })
        })
        .catch(next)

})



module.exports = router;