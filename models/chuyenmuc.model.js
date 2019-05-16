var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM chuyenmuc`);
    },

    allWithDetails: () =>{
        return db.load(`SELECT cm.ID, cm.ChuyenMuc, cm.CMC1, cm.CMC2, COUNT(bv.ID) AS num_of_article
                        FROM chuyenmuc cm left join baiviet bv on cm.ID = bv.ID_ChuyenMuc
                        GROUP BY cm.ID, cm.ChuyenMuc, cm.CMC1, cm.CMC2`);
    },

    singel: id =>{
        return db.load(`SELECT * FROM chuyenmuc WHERE ID = ${id}`)
    },

    add: entity => {
        return db.add('chuyenmuc', entity);
    },

    update: entity =>{
        return db.update('chuyenmuc', 'ID', entity);
    },

    delete: id =>{
        return db.delete('chuyenmuc', 'ID', id);
    }
};