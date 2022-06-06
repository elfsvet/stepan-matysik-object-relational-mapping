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
// i also created heroku server, but you would need to seed by itself.
// https://mysterious-harbor-32872.herokuapp.com/

// TODO record a video!
/*
The walkthrough video must show all of the technical acceptance criteria being met.

The walkthrough video must demonstrate how to create the schema from the MySQL shell.

The walkthrough video must demonstrate how to seed the database from the command line.

The walkthrough video must demonstrate how to start the application’s server.

The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.
*/