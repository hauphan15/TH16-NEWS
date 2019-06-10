var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var dsbaivietpvModel = require('../../models/dsbaiviet_phongvien.model');
var baivietModel = require('../../models/baiviet.model');
var moment = require('moment');
var router = exress.Router();


router.post('/duyet', (req, res, next) => {
    var ngaydang = moment(req.body.NgayDang, 'DD/MM/YYYY HH:MM').format('YYYY-MM-DD hh:mm:ss');
    var entity = {
        ID_ChuyenMuc: req.body.ID_ChuyenMuc,
        TenChuyenMuc: req.body.TenChuyenMuc,
        ChuyenMucCon: req.body.ChuyenMucCon,
        ID_CMC: req.body.ID_CMC,
        TenBaiViet: req.body.TenBaiViet,
        TomTat: req.body.TomTat,
        NoiDung: req.body.NoiDung,
        AnhDaiDien: req.body.AnhDaiDien,
        BienTapVien: req.body.BienTapVien,
        NgayDang: ngaydang,
        Tag1: req.body.tag1,
        Tag2: req.body.tag2,
        Tag3: req.body.tag3
    }
    Promise.all([
        baivietModel.add(entity),
        dsbaivietpvModel.update(req.body),
        baivietchoduyetModel.delete(req.body.ID_BVCD)])
        .then(() => {
            res.redirect('/admin/duyetbaiviet');
        })
        .catch(next)
})


router.post('/tuchoi', (req, res, next) => {
    Promise.all([
        baivietchoduyetModel.delete(req.body.ID_BVCD),
        dsbaivietpvModel.update(req.body)])
        .then(() => {
            res.redirect('/admin/duyetbaiviet');
        })
        .catch(next)
})


module.exports = router; 