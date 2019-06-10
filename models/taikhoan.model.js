var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM taikhoan`);
    },

    loadBTV: () => {
        return db.load(`SELECT * FROM taikhoan WHERE Quyen = 'BTV'`);
    },

    loadPV: () => {
        return db.load(`SELECT * FROM taikhoan WHERE Quyen = 'PV'`);
    },

    loadDG: () => {
        return db.load(`SELECT * FROM taikhoan WHERE Quyen = 'DG'`);
    },

    singel: id => {
        return db.load(`SELECT * FROM taikhoan WHERE ID = ${id}`)
    },

    add: entity => {
        return db.add('taikhoan', entity);
    },

    update: entity => {
        return db.update('taikhoan', 'ID', entity);
    },

    delete: id => {
        return db.delete('taikhoan', 'ID', id);
    },
    singleByUserName: tendn => {
        return db.load(`SELECT * FROM taikhoan WHERE TenDangNhap = '${tendn}' `);
    }
};