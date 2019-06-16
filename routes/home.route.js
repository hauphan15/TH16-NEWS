var exress = require('express');
var baivietModel = require('../models/baiviet.model');
var router = exress.Router();
 
router.get('/', (req, res, next) => {

    Promise.all([
        baivietModel.BaiNoiBat(),
        baivietModel.XemNhieuNhat(),
        baivietModel.MoiNhat(),
        baivietModel.TopCm()])
        .then(([noibat, xemnhieu, moinhat, topcm]) => {
            res.render('home', {
                bainoibat: noibat,
                title:'Trang Chủ',
                xemnhieunhat1: xemnhieu[0],
                xemnhieunhat2: xemnhieu[1],
                xemnhieunhat3: xemnhieu[2],
                xemnhieunhat4: xemnhieu[3],
                xemnhieunhat5: xemnhieu[4],
                xemnhieunhat6: xemnhieu[5],
                xemnhieunhat7: xemnhieu[6],
                xemnhieunhat8: xemnhieu[7],
                xemnhieunhat9: xemnhieu[8],
                xemnhieunhat10: xemnhieu[9],
                moinhat1: moinhat[0],
                moinhat2: moinhat[1],
                moinhat3: moinhat[2],
                moinhat4: moinhat[3],
                moinhat5: moinhat[4],
                moinhat6: moinhat[5],
                moinhat7: moinhat[6],
                moinhat8: moinhat[7],
                moinhat9: moinhat[8],
                moinhat10: moinhat[9],
                topcm1: topcm[0],
                topcm2: topcm[1],
                topcm3: topcm[2],
                topcm4: topcm[3],
                topcm5: topcm[4],
                topcm6: topcm[5],
                topcm7: topcm[6],
                topcm8: topcm[7],
                topcm9: topcm[8],
                topcm10: topcm[9],
            })
        })
        .catch(next)
})

module.exports = router;