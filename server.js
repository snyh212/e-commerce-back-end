const express = require('express');
const routes = require('./routes');
const mysql = require ('mysql2');
// import sequelize connection
const sequelize = require('./config/connection')

const connection = mysql.createConnection({
  host: "localhost",
  dialect: 'mysql',
  port: 3306,
  user: "root",
  password: "password",
  database: "ecommerce_db"
});
connection.connect(function(err){
  if(err) throw err;
  console.log("MYSQL connected!");
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() =>{
  app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
  });
});
