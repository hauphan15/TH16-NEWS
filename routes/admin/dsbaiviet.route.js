var exress = require('express');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();

router.get('/', (req, res) => {
    baivietModel.all()
        .then(rows => {
            res.render('admin/vwDsbaiviet/index', {
                dsbaiviet: rows
            });
        }).catch(err => {
            console.log(err);
        });
})

router.post('/xoa', (req, res) => {
    baivietModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;