var exress = require('express');
var baivietchoduyetModel = require('../../models/baivietchoduyet.model');
var dsbaivietpvModel = require('../../models/dsbaiviet_phongvien.model');
var baivietModel = require('../../models/baiviet.model');
var moment = require('moment');
var router = exress.Router();


router.post('/duyet', (req, res, next) => {
    var ngaydang = moment(req.body.NgayDang, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
    var daduyet = 'DD';
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

    var entity2 = {
        ID_BVPV: req.body.ID_BVPV,
        TinhTrang: daduyet,
        GhiChu: req.body.GhiChu
    }

    Promise.all([
        baivietModel.add(entity),
        dsbaivietpvModel.update(entity2),
        baivietchoduyetModel.delete(req.body.ID_BVCD)])
        .then(() => {
            res.redirect('/admin/duyetbaiviet');
        })
        .catch(next)
})


router.post('/tuchoi', (req, res, next) => {
    var entity = {
        ID_BVPV: req.body.ID_BVPV,
        TinhTrang: 'TC',
        GhiChu: req.body.GhiChu
    }

    Promise.all([
        baivietchoduyetModel.delete(req.body.ID_BVCD),
        dsbaivietpvModel.update(entity)])
        .then(() => {
            res.redirect('/admin/duyetbaiviet');
        })
        .catch(next)
})


module.exports = router; 