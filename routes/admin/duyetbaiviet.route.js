var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var router = exress.Router();
 

router.get('/', (req, res, next) => {
    baivietchoduyetModel.all()
        .then(rows => {
            res.render('admin/vwBvchoduyet/duyetbaiviet', {
                baivietchoduyet: rows
            })
        })
        .catch(next);
})

router.post('/xemchitiet', (req, res, next) => {
    baivietchoduyetModel.singel(req.body.ID_BVCD)
        .then(rows => {
            res.render('admin/vwBvchoduyet/xemchitiet', {
                xemchitiet: rows[0]
            })

        })
        .catch(next);
})

module.exports = router;