var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var dsbaivietpvModel = require('../../models/dsbaiviet_phongvien.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();


router.post('/duỵet', (req, res) => {
    Promise.all([
        baivietModel.add(req.body),
        dsbaivietpvModel.update(req.body.GhiChu),
        baivietchoduyetModel.delete(req.body.ID)])
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
        dsbaivietpvModel.update(req.body.GhiChu)])
        .then(() => {
            res.redirect('back');
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;