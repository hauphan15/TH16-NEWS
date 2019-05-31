var exress = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var docgiaModel = require('../models/docgia.model');

var router = exress.Router();


router.get('/is-available', (req, res, next) => {
    var tendn = req.query.tendn;
    docgiaModel.singleByUserName(tendn).then(rows => {
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
        NgayConLai: 7
    }

    docgiaModel.add(entity).then(() => {
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
            if (err)
                return next(err);

            return res.redirect('/');
        });
    })(req, res, next);
})



module.exports = router;