var db = require('../utills/db');

module.exports = {
    all: () => {
        return db.load(`SELECT * FROM dsbaivietphongvien`);
    },

    allByTK_DC: idtk => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_TK = ${idtk} AND TinhTrang != 'DD'`);
    },

    allByTK_DD: idtk => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_TK = ${idtk} AND TinhTrang = 'DD'`);
    },

    allByCat: CatId => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_ChuyenMuc = ${CatId}`);
    },

    allByCMC: IdCMC => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_CMC = '${IdCMC}' `);
    },

    singel: id => {
        return db.load(`SELECT * FROM dsbaivietphongvien WHERE ID_BVPV = ${id}`);
    },

    add: entity => {
        return db.add('dsbaivietphongvien', entity);
    },
    update: entity => {
        return db.update('dsbaivietphongvien', 'ID_BVPV', entity);
    },

    delete: id => {
        return db.delete('dsbaivietphongvien', 'ID_BVPV', id);
    },
    countAll: () => {
        return db.load(`SELECT count(*) as total FROM dsbaivietphongvien`);
    }
};