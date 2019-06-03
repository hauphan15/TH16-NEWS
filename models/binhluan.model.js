var db = require('../utills/db');

module.exports = {
    allByIdBv: (Id) => {
        return db.load(`SELECT * FROM binhluan WHERE ID_BV = ${Id}`);
    },

    add: entity => {
        return db.add('binhluan', entity);
    },

    update: entity => {
        return db.update('binhluan', 'ID_BVCD', entity);
    },

    delete: id => {
        return db.delete('binhluan', 'ID_BVCD', id);
    }
};