var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM baiviet`);
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

    delete: id => {
        return db.delete('baiviet', 'ID', id);
    }
};