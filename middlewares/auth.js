module.exports = (req, res, next) => {
    if (!req.user) {
        res.redirect('/taikhoan/dangnhap');
    }
    next();
}

