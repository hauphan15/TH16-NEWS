var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var router = exress.Router();

router.get('/', (req, res) => {
    chuyenmucModel.all()
    .then(rows => {
        res.render('phongvien/dangbaiviet', {
            chuyenmuc: rows
        });
    }).catch(err => {
        console.log(err);
    });
})

module.exports = router;