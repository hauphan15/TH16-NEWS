var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load('SELECT * FROM chuyenmuc');
    },
    add: entity => {
        return db.add('chuyenmuc', entity);
    }
};