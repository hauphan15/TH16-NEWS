var chuyenmucModel = require('../models/chuyenmuc.model');

module.exports = (req, res, next) => {
    chuyenmucModel.allWithDetails().then(rows => {
        res.locals.lcChuyenmuc = rows;
        next();
    })
}