//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
// const db = require('./models');

let app = express();
let port = process.env.PORT || 8080;

app.use(session({secret: "mysupersecret"}));

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


//Directory to be served
app.use(express.static(`public/`));

//Routes
require(`./routes/api-routes.js`)(app);
require(`./routes/html-routes.js`)(app);
require(`./routes/login-routes.js`)(app);

//Start the Server
// db.sequelize.sync();
  // db.Sequelize.sync();
  app.listen(port, function(){
    console.log(`App listening on port ${port}`);
  });
