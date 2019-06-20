var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM baiviet`);
    },

    count: () => {
        return db.load(`SELECT COUNT(ID_ChuyenMuc) FROM baiviet GROUP BY ID_ChuyenMuc`);
    },

    delete: id => {
        return db.delete('baiviet', 'ID', id);
    },

    allByTag: tag => {
        return db.load(`SELECT * FROM baiviet 
        WHERE Tag1 = N'${tag}' OR Tag2 = N'${tag}' OR Tag3 = N'${tag}' `);
    },

    tag: (IdCm) => {
        return db.load(`SELECT Tag1 FROM baiviet WHERE ID_ChuyenMuc = ${IdCm} ORDER BY RAND() LIMIT 3`);
    },

    CungCm: (Id) => {
        return db.load(`SELECT * FROM baiviet 
        WHERE ID_ChuyenMuc = (SELECT ID_ChuyenMuc FROM baiviet WHERE ID = ${Id}) ORDER BY RAND() LIMIT 5 `);
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
    updateView: id => {
        return db.updateView(id);
    },

    BaiNoiBat: () => {
        return db.load(`SELECT * FROM baiviet ORDER BY SoLuotXem DESC LIMIT 3`);
    },

    XemNhieuNhat: () => {
        return db.load(`SELECT * FROM baiviet ORDER BY SoLuotXem DESC LIMIT 10`);
    },

    MoiNhat: () => {
        return db.load(`SELECT * FROM baiviet ORDER BY NgayDang DESC LIMIT 10`);
    },
    TopCm: () => {
        return db.load(`SELECT t1.*
                        FROM baiviet t1
                        WHERE t1.NgayDang = (SELECT MAX(t2.NgayDang)
                        FROM baiviet t2
                        WHERE t2.ID_ChuyenMuc = t1.ID_ChuyenMuc
                        LIMIT 1)`);

    },
    search: (test) => {
        return db.load(`SELECT * 
                        FROM baiviet 
                        WHERE MATCH (TenBaiViet) AGAINST ('${test}' IN NATURAL LANGUAGE MODE)`);
    },
};