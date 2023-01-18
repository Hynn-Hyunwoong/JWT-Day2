const config = {
    db : {
        development : {
            database : 'signDB',
            username : 'root',
            password : 'Apple1984!',
            host : '127.0.0.1',
            port : '3306',
            dialect : 'mysql',
            define : {
                freezeTableName : true,
                timestamps : false,
            }
        }
    },
    test : {
        database : 'signDB_Test',
        username : 'root',
            password : 'Apple1984!',
            host : '127.0.0.1',
            port : '3306',
            dialect : 'mysql',
            define : {
                freezeTableName : true,
                timestamps : false,
            }
    }
}

module.exports = config;