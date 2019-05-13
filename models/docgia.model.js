var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load('SELECT * FROM docgia');
    },
    add: entity => {
        return db.add('docgia', entity);
    }
};