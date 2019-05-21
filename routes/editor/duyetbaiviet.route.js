var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();


router.get('/:idcm', (req, res) => {
    var id = req.params.idcm;

    baivietchoduyetModel.allByCM(id)
        .then(rows => {
            res.render('bientapvien/duyetbaiviet', {
                baivietchoduyet: rows
            })
        })
        .catch(err => {
            console.log(err);
        });
})

module.exports = router;