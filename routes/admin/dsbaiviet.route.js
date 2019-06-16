var exress = require('express');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    baivietModel.all()
        .then(rows => {
            res.render('admin/vwDsbaiviet/index', {
                dsbaiviet: rows
            });
        }).catch(next);
})

router.post('/xoa', (req, res, next) => {
    baivietModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})


module.exports = router;