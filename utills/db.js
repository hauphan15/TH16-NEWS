var mysql = require('mysql');


var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '',
        database: 'th16news'
    });
}

module.exports = {
    load: sql => {
        return new Promise((resolve, reject) => {
            var connec = createConnection();
            connec.connect();
            connec.query(sql, function (error, results, fields) {
                if (error) throw error;
                else {
                    resolve(results);
                }
                connec.end();
            });
        });
    },
    add: (tableName, entity) => {
        return new Promise((resolve, reject) => {
            var sql = `INSERT INTO ${tableName} SET ?`;
            var connec = createConnection();
            connec.query(sql, entity, (error, values) => {
                if (error)
                    reject(error);
                else {
                    resolve(values);
                }
                connec.end();
            });
        });
    },
    update: (tableName, idField, entity) => {
        return new Promise((resolve, reject) => {
            var id = entity[idField];
            delete entity[idField];

            var sql = `UPDATE ${tableName} SET ? WHERE ${idField} = ?`;
            var connec = createConnection();
            connec.query(sql, [entity, id], (error, values) => {
                if (error)
                    reject(error);
                else {
                    resolve(values.changedRows);
                }
                connec.end();
            });
        });
    },
    delete: (tableName, idField, id) => {
        return new Promise((resolve, reject) => {
            var sql = `DELETE FROM ${tableName} WHERE ${idField} = ?`;
            var connec = createConnection();
            connec.query(sql, id, (error, values) => {
                if (error)
                    reject(error);
                else {
                    resolve(values.affectedRows);
                }
                connec.end();
            });
        });
    },
    updateView: (id) => {
        return new Promise((resolve, reject) => {
            var sql = `UPDATE baiviet SET SoLuotXem = SoLuotXem + 1 WHERE ID = ?`;
            var connec = createConnection();
            connec.query(sql, id, (error, values) => {
                if (error)
                    reject(error);
                else {
                    resolve(values.changedRows);
                }
                connec.end();
            });
        });
    },
}

