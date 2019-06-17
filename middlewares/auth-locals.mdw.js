module.exports = (req, res, next) => {
    if (req.user) {
        res.locals.isAuthenticated = true;
        res.locals.authUser = req.user;
        if (req.user.Quyen == 'AD') {
            res.locals.isAdmin = true;
        }
        else if (req.user.Quyen == 'BTV') {
            res.locals.isBTV = true;
        }
        else if (req.user.Quyen == 'PV') {
            res.locals.isPV = true;
        }
        else {
            res.locals.isDG = true;
        }
    }
    next();
}
