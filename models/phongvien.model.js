var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load('SELECT * FROM phongvien');
    },
    add: entity => {
        return db.add('phongvien', entity);
    }
};