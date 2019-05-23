var exress = require('express');
var bientapvienModel = require('../../models/bientapvien.model');
var router = exress.Router();

router.get('/', (req, res) => {
    var p = bientapvienModel.all();
    p.then(rows => {
        res.render('admin/vwBientapvien/index', {
            bientapvien: rows
        });
    }).catch(err => {
        console.log(err);
    });
})


router.post('/add', (req, res) => {
    bientapvienModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/update', (req, res) => {
    bientapvienModel.update(req.body)
        .then(n => {
            res.redirect('back');
        }) 
        .catch(err => {
            console.log(err);
        })
})

router.post('/delete', (req, res) => {
    bientapvienModel.delete(req.body.ID)
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;