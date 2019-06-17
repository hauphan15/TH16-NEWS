var exress = require('express');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var taikhoanModel = require('../models/taikhoan.model');
var auth = require('../middlewares/auth');
var moment = require('moment');

var router = exress.Router();


router.get('/is-available', (req, res, next) => {
    var tendn = req.query.tendn;
    taikhoanModel.singleByUserName(tendn).then(rows => {
        if (rows.length > 0) {
            return res.json(false);
        }
        return res.json(true);
    })
})


router.get('/dangky', (req, res, next) => {
    res.render('taikhoan/dangky',{
        title:'Đăng Ký'
    });
})

router.post('/dangky', (req, res, next) => {
    var saltRounds = 10;
    var hash = bcrypt.hashSync(req.body.matkhau, saltRounds);
    var ngaysinh = moment(req.body.ngaysinh, 'DD/MM/YYYY').format('YYYY-MM-DD');

    var entity = {
        TenDangNhap: req.body.tendn,
        Password: hash,
        Hoten: req.body.hoten,
        Email: req.body.email,
        NgaySinh: ngaysinh,
        NgayConLai:7
    }

    taikhoanModel.add(entity).then((id) => {
        res.redirect('/taikhoan/dangnhap');
    })
})

router.get('/dangnhap', (req, res, next) => {
    res.render('taikhoan/dangnhap',{
        title:'Đăng Nhập'
    })
})

router.post('/dangnhap', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);

        if (!user) {
            return res.render('taikhoan/dangnhap', {
                err_message: info.message,
                title:'error'
            });
        }

        req.logIn(user, err => {
            if (err) return next(err);

            return res.redirect('/');
        });
    })(req, res, next);
})

router.get('/hosocanhan', auth, (req, res, next) => {
    res.render('taikhoan/hoso');
})

router.get('/hosocanhan/capnhathoso', auth, (req, res, next) => {
    res.render('taikhoan/capnhathoso');
})


router.post('/submit', (req, res, next) => {
    var ngaysinh = moment(req.body.NgaySinh, 'DD/MM/YYYY').format('YYYY-MM-DD');
    var entity = {
        ID: req.body.ID,
        HoTen: req.body.HoTen,
        Email: req.body.Email,
        NgaySinh: ngaysinh,
    }
    taikhoanModel.update(entity).then((id) => {
        res.redirect('/taikhoan/hosocanhan');
    })
})

router.post('/dangxuat', auth, (req, res, next) => {
    req.logOut();
    res.redirect('/taikhoan/dangnhap');
})


module.exports = router;