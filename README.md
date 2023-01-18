# JWT Day 2
Login Feature

## Express setting

```sh
npm install express mysql2 sequelize dotenv

### TDD




## File Historied

app.js 
```js
const express = require('express');
const app = express();

app.use(express.json());
app.use((error,req,res,next)=> {
    res.status(500).send(error.message)
})

module.exports = app;
```

server.js
```js
const app = require('./app');

app.listen(3000,()=>{
    console.log("Engine Start listening Port on 3000");
});
```

config.js
```js
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
```

#### Seeting Models
1) User Table (Models)

```js
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config')["db"][env]
const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
    Sequelize,
    sequelize
}
```

2) user.models
```js
module.exports = (sequelize, Sequelize) => {
    // class 선언
    class User extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    userId: {
                        type: Sequelize.STRING(60),
                        primaryKey: true,
                    },
                    userPw: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    username: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    provider: {
                        type: Sequelize.ENUM("local", "kakao"),
                        allowNull: false,
                        defaultValue: "local",
                    },
                    snsId: {
                        type: Sequelize.STRING(30),
                        allowNull: true,
                    },
                },
                {
                    sequelize,
                }
            )
        }
    }

    // class 사용
    User.initialize()
}
```

3) index.js Launch to class function 
```js
// Single file 
require("./user.model.js")(sequelize,Sequelize);
// Automatic same_rule file 
fs.readdirSync(__dirname)
    .filter((file) => file.indexOf("model") !== -1)
    .forEach((file) => {
        require(path.join(__dirname,file))(sequelize,Sequelize)
})

// Model > relational 
const {models} = sequelize 
for (const key in models) {
    if (typeof models[key].associate !== 'function') continue 
    models[key].associate(models)
}


```

4) connect to server
```js
const {sequelize} = require('./models');
const port = process.env.PORT || 3000;

app.listen(3000, async()=>{
    await sequelize.sync({force : true});
    console.log("Processing...")
    console.log(`Engine Start listening Port on ${port}`);
});
```

