var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM baiviet`);
    },

    allByTag: (tag1, tag2, tag3) => {
        return db.load(`SELECT * FROM baiviet 
        WHERE Tag1 IN (N'${tag1}',N'${tag2}',N'${tag3}') 
        OR Tag2 IN (N'${tag1}',N'${tag2}',N'${tag3}')
        OR Tag3 IN (N'${tag1}',N'${tag2}',N'${tag3}')`);
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