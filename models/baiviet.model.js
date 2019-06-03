var db = require('../utills/db');
 
module.exports = {
    all: () => {
        return db.load(`SELECT * FROM baiviet`);
    },

    allByTag: tag => {
        return db.load(`SELECT * FROM baiviet 
        WHERE Tag1 = N'${tag}' OR Tag2 = N'${tag}' OR Tag3 = N'${tag}' `);
    },

    tag: (IdCm) => {
        return db.load(`SELECT Tag1 FROM baiviet WHERE ID_ChuyenMuc = ${IdCm} LIMIT 3`);
    },

    CungCm: (Id) => {
        return db.load(`SELECT * FROM baiviet 
        WHERE ID_ChuyenMuc = (SELECT ID_ChuyenMuc FROM baiviet WHERE ID = ${Id}) LIMIT 5 `);
    },

    allByCat: CatId => {
        return db.load(`SELECT * FROM baiviet WHERE ID_ChuyenMuc = ${CatId}`);
    },

    allByCMC: IdCMC => {
        return db.load(`SELECT * FROM baiviet WHERE ID_CMC = '${IdCMC}' `);
    },

    pageByCM: (IdCM, limit, offset) => {
        return db.load(`SELECT * FROM baiviet WHERE ID_ChuyenMuc = '${IdCM}' limit ${limit} offset ${offset}`);
    },

    countByCM: IdCM => {
        return db.load(`SELECT count(*) as total FROM baiviet WHERE ID_ChuyenMuc = '${IdCM}' `);
    },

    singel: id => {
        return db.load(`SELECT * FROM baiviet WHERE ID = ${id}`);
    },

    add: entity => {
        return db.add('baiviet', entity);
    },

    update: entity => {
        return db.update('baiviet', 'ID', entity);
    },

    BaiNoiBat: () => {
        return db.load(`SELECT * FROM baiviet WHERE GhiChu = N'bài nổi bật' LIMIT 3`);
    },

    XemNhieuNhat1: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5`);
    },

    XemNhieuNhat2: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5 OFFSET 5`);
    },

    MoiNhat1: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5`);
    },
    MoiNhat2: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5 OFFSET 5`);
    },
    TopCm1: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5`);
    },
    TopCm2: () => {
        return db.load(`SELECT * FROM baiviet LIMIT 5 OFFSET 5`);
    },
};