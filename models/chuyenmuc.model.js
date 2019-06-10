var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM chuyenmuc`);
    },

    allWithDetails: () => {
        return db.load(`SELECT * From ChuyenMuc`);
    },

    singel: id => {
        return db.load(`SELECT * FROM chuyenmuc WHERE ID = ${id}`)
    },

    add: entity => {
        return db.add('chuyenmuc', entity);
    },

    update: entity => {
        return db.update('chuyenmuc', 'ID', entity);
    },

    delete: id => {
        return db.delete('chuyenmuc', 'ID', id);
    }
};