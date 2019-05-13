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


router.post('/', (req, res) => {
    docgiaModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;