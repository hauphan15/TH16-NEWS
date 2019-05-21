var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();


router.get('/', (req, res) => {
    var id = req.params.idcm;

    baivietchoduyetModel.all(id)
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