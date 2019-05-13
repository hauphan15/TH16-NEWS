var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load('SELECT * FROM bientapvien');
    },
    add: entity => {
        return db.add('bientapvien', entity);
    }
};