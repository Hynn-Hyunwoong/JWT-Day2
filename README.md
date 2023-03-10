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

5) create unit test
create an test-code (unit test)
test framework - Jest(made by Meta)
```sh
npm install -D jest node-mocks-http supertest
```

```sh
package.json
"start" : "node server",
"test" : "jest"
```

JestRunner extension 
particle run/Debug

jwt.test.js
```js
const JWT = require('./jwt');
const crypto = require('crypto');

describe("lib/JWT.js", () => {
    let jwt
    it('constructor', () => {
        expect(typeof JWT).toBe("function");
        jwt = new JWT({crypto});
        expect(typeof jwt.crypto).toBe("object")
    });
});
```

```result 
 lib/JWT.js
    ✕ constructor (3 ms)

  ● lib/JWT.js › constructor

    expect(received).toBe(expected) // Object.is equality

    Expected: "object"
    Received: "undefined"

       7 |         expect(typeof JWT).toBe("function");
       8 |         jwt = new JWT({crypto});
    >  9 |         expect(typeof jwt.crypto).toBe("object")
         |                                   ^
      10 |     });
      11 | });

      at Object.toBe (lib/jwt.test.js:9:35)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.248 s, estimated 1 s
```

### Routes 
```
/src
- user
- board
- comment
```

```javascript
test code part2
const UserRepository = require("./user.repository");

describe("UserRepository", () => {
    it("UserRepository", () => {
        expect(typeof UserRepository).toBe("function");
    })

    let a // beforeEach -> it 실행시마다 재실행
    beforeEach(()=>{
        a = 10
    })

    describe("addUser", () => {
        it('[try] addUser check method',()=>{
            a = 20
            expect(a).toBe(20)
        })

        it("[catch] addUser method Error" ()=>{
            expect(a).toBe(20)
        })
    })
})

```