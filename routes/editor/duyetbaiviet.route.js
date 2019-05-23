var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();


router.get('/:idCMQL', (req, res) => {
    var id = req.params.idCMQL;

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


router.post('/xemchitiet', (req, res) => {
    var id = req.body.ID;

    baivietchoduyetModel.singel(id)
        .then(rows => {
            res.render('bientapvien/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(err => {
            console.log(err);
        });
})



module.exports = router;