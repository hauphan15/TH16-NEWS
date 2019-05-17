var exress = require('express');
var docgiaModel = require('../../models/docgia.model');
var router = exress.Router();

router.get('/', (req, res) => {
    var p = docgiaModel.all();
    p.then(rows => {
        res.render('admin/vwDocgia/index', {
            docgia: rows
        });
    }).catch(err => {
        console.log(err);
    });
})


router.post('/add', (req, res) => {
    docgiaModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/update', (req, res) => {
    docgiaModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/delete', (req, res) => {
    docgiaModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;