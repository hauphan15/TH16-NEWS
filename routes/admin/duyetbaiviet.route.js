var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();


router.get('/', (req, res) => {
    baivietchoduyetModel.all()
        .then(rows => {
            res.render('admin/vwBvchoduyet/duyetbaiviet', {
                baivietchoduyet: rows
            })
        })
        .catch(err => {
            console.log(err);
        });
})

router.post('/xemchitiet', (req, res) => {
    baivietchoduyetModel.singel(req.body.ID_BVCD)
        .then(rows => { 
            res.render('admin/vwBvchoduyet/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(err => {
            console.log(err);
        });
})

module.exports = router;