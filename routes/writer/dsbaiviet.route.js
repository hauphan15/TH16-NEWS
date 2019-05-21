var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var router = exress.Router();

router.get('/', (req, res) => {
    dsbavietModel.all()
    .then(rows => {
        res.render('phongvien/danhsachbaiviet', {
            dsbaiviet: rows
        });
    }).catch(err => {
        console.log(err);
    });
})

module.exports = router;