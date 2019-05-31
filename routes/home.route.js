var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();

router.get('/', (req, res, next) => {

    Promise.all([
        baivietModel.BaiNoiBat(),
        baivietModel.XemNhieuNhat1(),
        baivietModel.XemNhieuNhat2(),
        baivietModel.MoiNhat1(),
        baivietModel.MoiNhat2(),
        baivietModel.TopCm1(),
        baivietModel.TopCm2()])
        .then(([noibat, xemnhieu1, xemnhieu2, moinhat1, moinhat2, topcm1, topcm2]) => {
            res.render('home', {
                bainoibat: noibat,
                xemnhieunhat1: xemnhieu1,
                xemnhieunhat2: xemnhieu2,
                moinhat1: moinhat1,
                moinhat2: moinhat2,
                topcm1: topcm1,
                topcm2: topcm2
            })
        })
        .catch(next)
})

module.exports = router;