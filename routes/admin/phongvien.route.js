var exress = require('express');
var phongvienModel = require('../../models/phongvien.model');
var router = exress.Router();

router.get('/', (req, res) => {
    var p = phongvienModel.all();
    p.then(rows => {
        res.render('admin/vwPhongvien/index', {
            phongvien: rows
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