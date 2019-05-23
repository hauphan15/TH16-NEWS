var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var dsbaivietModel = require('../../models/dsbaiviet_phongvien.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();


router.post('/duỵet', (req, res) => {
    baivietModel.add(req.body)
        .then(ID => {
            console.log(ID);
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/tuchoi', (req, res) => {

    Promise.all([
        baivietchoduyetModel.delete(req.body.ID),
        dsbaivietModel.update(req.body.GhiChu)])
        .then(n => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;