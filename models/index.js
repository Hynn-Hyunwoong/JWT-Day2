const fs = require("fs");
const path = require("path");
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config')["db"][env]
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// require("./user.model.js")(sequelize,Sequelize);

fs.readdirSync(__dirname)
    .filter((file) => file.indexOf("model") !== -1)
    .forEach((file) => {
        require(path.join(__dirname,file))(sequelize,Sequelize)
})
// console.log(test1); // ['index.js', 'user.model.js']
// const test1 = fs.readdirSync(__dirname)
// const test2 = fs.readdirSync(__dirname).filter((file) => file.indexOf("model")); 
// console.log(test2); // [ 'user.model.js' ]

// Model > relational 
const {models} = sequelize 
for (const key in models) {
    if (typeof models[key].associate !== 'function') continue 
    models[key].associate(models)
}

module.exports = {
    Sequelize,
    sequelize
}