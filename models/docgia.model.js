var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM docgia`);
    },

    singel: id =>{
        return db.load(`SELECT * FROM docgia WHERE ID = ${id}`)
    },

    add: entity => {
        return db.add('docgia', entity);
    },

    update: entity =>{
        return db.update('docgia', 'ID', entity);
    },

    delete: id =>{
        return db.delete('docgia', 'ID', id);
    },
    singleByUserName: tendn =>{
        return db.load(`SELECT * FROM docgia WHERE TenDangNhap = '${tendn}' `);
    }
};