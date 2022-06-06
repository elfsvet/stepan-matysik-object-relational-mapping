const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// turn on connection to db and server
// if we change the force  from false to true it will DROP TABLE IF EXISTS This allows the table to be overwritten and re-created.
// but we don't need to drop it every time so we will change it back to false if we don't need to erase the tables
// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`🌎 App listening on port http://localhost:${PORT} 🌎`));
});

// https://mysterious-harbor-32872.herokuapp.com/