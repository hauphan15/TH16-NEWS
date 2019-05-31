var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();


router.get('/:idCMQL', (req, res, next) => {
    baivietchoduyetModel.allByCM(req.params.idCMQL)
        .then(rows => {
            res.render('bientapvien/duyetbaiviet', {
                baivietchoduyet: rows
            })
        })
        .catch(next);
})


router.post('/xemchitiet', (req, res, next) => {
    baivietchoduyetModel.singel(req.body.ID_BVCD)
        .then(rows => {
            res.render('bientapvien/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(next);
})



module.exports = router;