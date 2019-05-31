var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    var p = chuyenmucModel.all();
    p.then(rows => {
        res.render('admin/vwChuyenmuc/index', {
            chuyenmuc: rows
        });
    }).catch(next);
})


router.post('/add', (req, res, next) => {
    chuyenmucModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    chuyenmucModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    chuyenmucModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;