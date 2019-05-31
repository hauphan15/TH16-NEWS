var exress = require('express');
var bientapvienModel = require('../../models/bientapvien.model');
var router = exress.Router();

router.get('/', (req, res, next) => {
    var p = bientapvienModel.all();
    p.then(rows => {
        res.render('admin/vwBientapvien/index', {
            bientapvien: rows
        });
    }).catch(next);
})


router.post('/add', (req, res, next) => {
    bientapvienModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(next)
})

router.post('/update', (req, res, next) => {
    bientapvienModel.update(req.body)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

router.post('/delete', (req, res, next) => {
    bientapvienModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(next)
})

module.exports = router;