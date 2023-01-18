# JWT Day 2
Login Feature

## Express setting

```sh
npm install express mysql2 sequelize dotenv

### TDD




## File Historied

app.js 
```
const express = require('express');
const app = express();

app.use(express.json());
app.use((error,req,res,next)=> {
    res.status(500).send(error.message)
})

module.exports = app;
```

server.js
```
const app = require('./app');

app.listen(3000,()=>{
    console.log("Engine Start listening Port on 3000");
});
```

config.js
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


