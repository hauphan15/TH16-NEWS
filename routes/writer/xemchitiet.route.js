var exress = require('express');
var dsbavietModel = require('../../models/dsbaiviet_phongvien.model');
var router = exress.Router();


router.post('/', (req, res) => {
    var id = req.body.ID;

    dsbavietModel.singel(id)
        .then(rows => {
            res.render('phongvien/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(err => {
            console.log(err);
        });
})


router.post('/capnhat', (req, res) => {
    dsbavietModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;