var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM dsbaivietphongvien`);
    },

    allByCat: CatId => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_ChuyenMuc = ${CatId}`);
    },

    allByCMC: IdCMC => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_CMC = '${IdCMC}' `);
    },

    singel: id => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID = ${id}`);
    },
};