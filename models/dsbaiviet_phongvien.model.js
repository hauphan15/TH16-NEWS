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

    add: entity => {
        return db.add('dsbaivietphongvien', entity);
    },
    update: entity => {
        return db.update('dsbaivietphongvien', 'ID', entity);
    },

    delete: id => {
        return db.delete('dsbaivietphongvien', 'ID', id);
    },
    countAll: () => {
        return db.load(`SELECT count(*) as total FROM dsbaivietphongvien`);
    }
};