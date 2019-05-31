var exress = require('express');
var docgiaModel = require('../../models/docgia.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    var p = docgiaModel.all();
    p.then(rows => {
        res.render('admin/vwDocgia/index', {
            docgia: rows
        });
    }).catch(next);
})


router.post('/add', (req, res, next) => {
    docgiaModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    docgiaModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    docgiaModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;