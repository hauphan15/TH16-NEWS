var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM bientapvien`);
    },

    singel: id => {
        return db.load(`SELECT * FROM bientapvien WHERE ID = ${id}`)
    },

    singelByPenName: butdanh => {
        return db.load(`SELECT * FROM bientapvien WHERE ButDanh = N'${butdanh}' `)
    },

    add: entity => {
        return db.add('bientapvien', entity);
    },

    update: entity => {
        return db.update('bientapvien', 'ID', entity);
    },

    delete: id => {
        return db.delete('bientapvien', 'ID', id);
    }
};