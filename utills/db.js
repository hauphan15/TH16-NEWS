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
    }
}

