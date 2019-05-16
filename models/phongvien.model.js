var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM phongvien`);
    },

    singel: id =>{
        return db.load(`SELECT * FROM phongvien WHERE ID = ${id}`)
    },

    add: entity => {
        return db.add('phongvien', entity);
    },

    update: entity =>{
        return db.update('phongvien', 'ID', entity);
    },

    delete: id =>{
        return db.delete('phongvien', 'ID', id);
    }
};