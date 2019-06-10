var exress = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var taikhoanModel = require('../models/taikhoan.model');
var auth = require('../middlewares/auth');

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
    res.render('taikhoan/dangky');
})

router.post('/dangky', (req, res, next) => {
    var saltRounds = 10;
    var hash = bcrypt.hashSync(req.body.matkhau, saltRounds);

    var entity = {
        TenDangNhap: req.body.tendn,
        Password: hash,
        Hoten: req.body.hoten,
        Email: req.body.email,
        NgaySinh: req.body.ngaysinh,
    }

    taikhoanModel.add(entity).then((id) => {
        res.redirect('/taikhoan/dangnhap');
    })
})

router.get('/dangnhap', (req, res, next) => {
    res.render('taikhoan/dangnhap');
})

router.post('/dangnhap', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);

        if (!user) {
            return res.render('taikhoan/dangnhap', {
                err_message: info.message
            })
        }

        req.logIn(user, err => {
            if (err) return next(err);

            return res.redirect('/');
        });
    })(req, res, next);
})

router.get('/hosocanhan', auth, (req, res, next) => {
    res.end('hosocanhan');
})

router.post('/dangxuat', auth, (req, res, next) => {
    req.logOut();
    res.redirect('/taikhoan/dangnhap');
})


module.exports = router;