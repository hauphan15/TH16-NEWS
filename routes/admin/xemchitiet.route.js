var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var dsbaivietpvModel = require('../../models/dsbaiviet_phongvien.model');
var baivietModel = require('../../models/baiviet.model');
var router = exress.Router();


router.post('/duyet', (req, res) => {
    Promise.all([
        baivietModel.add(req.body),
        dsbaivietpvModel.update(req.body),
        baivietchoduyetModel.delete(req.body.ID_BVCD)])
        .then(() => {
            res.redirect('admin/duyetbaiviet');
        })
        .catch(err => {
            console.log(err);
        })
})


router.post('/tuchoi', (req, res) => {
    Promise.all([
        baivietchoduyetModel.delete(req.body.ID_BVCD),
        dsbaivietpvModel.update(req.body)])
        .then(() => {
            res.redirect('admin/duyetbaiviet');
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;