const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./controllers");

// create the Express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


// set up sessions
const sess = {
    secret: "Super secret secret",
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

// inform Express.js on which template engine to use
const hbs = exphbs.create({ helpers });

// set up Handlebars.js engine with custom helpers
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

app.use(require("./controllers/"));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`Now listening on http://localhost:${PORT}`)
    );
});
