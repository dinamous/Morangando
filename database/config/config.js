require('dotenv').config();

console.log(process.env.DATABASE_HOST);

module.exports = {
  "development": {
    "username": "root",
    "password": "vertrigo",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port":process.env.DATABASE_PORT,
    "dialect": "mysql",
  //   "dialectOptions": {
  //     "ssl": true
  // }
  }
  
}
