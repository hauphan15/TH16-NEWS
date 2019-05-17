var exress = require('express');
var chuyenmucModel = require('../../models/chuyenmuc.model');
var router = exress.Router();

router.get('/', (req, res) => {
    var p = chuyenmucModel.all();
    p.then(rows => {
        res.render('admin/vwChuyenmuc/index', {
            chuyenmuc: rows
        });
    }).catch(err => {
        console.log(err);
    });
})


router.post('/add', (req, res) => {
    chuyenmucModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/update', (req, res) => {
    chuyenmucModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/delete', (req, res) => {
    chuyenmucModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;