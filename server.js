const app = require('./app');
const {sequelize} = require('./models');
const port = process.env.PORT || 3000;

app.listen(3000, async()=>{
    await sequelize.sync({force : true});
    console.log("Processing...")
    console.log(`Engine Start listening Port on ${port}`);
});

