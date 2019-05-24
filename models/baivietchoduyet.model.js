var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM baivietchoduyet`);
    },

    allByCM: IdCM => {
        return db.load(`SELECT * FROM baivietchoduyet WHERE ID_ChuyenMuc = ${IdCM}`);
    },

    singel: id => {
        return db.load(`SELECT * FROM baivietchoduyet WHERE ID_BVCD = ${id} `);
    },

    add: entity => {
        return db.add('baivietchoduyet', entity);
    },

    delete: id => {
        return db.delete('baivietchoduyet', 'ID_BVCD', id);
    }
};