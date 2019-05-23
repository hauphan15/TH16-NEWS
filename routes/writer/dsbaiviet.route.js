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

router.post('/xemchitiet', (req, res) => {
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

router.post('/xoa', (req, res) => {
    dsbavietModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})



module.exports = router;