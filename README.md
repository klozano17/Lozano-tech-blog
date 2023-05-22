# Lozano-Tech-Blog

## Description
This is a full stack application using the Model-View-Controller paradigm. The application uses a number of different technologies, including: Mysql, Express.js, mysql2 npm package, sequelize npm package, express-handlebars npm package, express-session npm package, connect-session-sequelize npm package, dotenv npm package, and bcrypt npm package.

New users must first sign-up, and returning users can login.
This tech blog allows new and returning users to view and create blog posts, interact with blog posts by commenting, and update or delete blog posts.

## Links
- [github repo](https://github.com/erinsawyer504/techno-tech-blog)


## Table of Contents
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Constributing](#contributing)  
- [Tests](#tests)  
- [Questions](#questions)

## Installation
Clone the repo into your vs code.  This application also requires node.js, express.js, mysql2, and sequelize.  Ton install these items, run `npm install` in the command line.  To start the application, you will first need to connect the schema to mysql.  To do so, first change your password in the .env file and then run `mysql -u root -p` in the command line, then type `SOURCE db/schema.sql`.  You will next need to seed the file by typing `npm run seed` into the command line. It comes with some seeds already.  To install those seeds, run `npm run seed`. To start the server, type `npm start`.  The port used in this app is 3001. 

## Usage


## License
This repository is not covered under any license.

## Contributing
To contribute to this application, just fork the repository!

## Tests
This application does not use any tests.

## Questions
If you have any questions, please reach out to me at: 
[GitHub profile](https://www.github.com/klozano17)    

