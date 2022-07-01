/*
ORM
Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

ODM on the other hand is an Object Document Mapper, which maps objects with a Document Database like MongoDB. The main difference is that ORM is for MySQL databases, while ODM does the mapping for document representation of data like MongoDB.

For example if I have a table of users, it is mapped to a single object for all users, with various methods associated with it.

SEQUELIZE
Object Relation Mapping is a process that helps us to map information between objects and relation database such as MySQL. Sequelize is an example of ORM.

MODEL
A Model represents a table in the database. It is a blueprint for data to be mapped from the database. The sequelize method .define is used to define a model in ORM as we will see.

PROJECT STRUCTURE
database (connecting to our MySQL database using sequelize)
models (creating a blueprint/template using sequelize)
routes (defined API routes to receive and process server requests and responses)

STEPS
A. server.js
1. Create an express server
- Require express, cors, body-parser
- Instantiate the express class
2. Set up body-parser and cors for use
- Using the express instance, set up bodyParser and cors for use
- Set up default port
- Require your routes files
- Set up routes for use
- Listen for incoming requests 

B. database/db.js
3. Connecting to a database
- Require Sequelize from sequelize
- Make empty db object
- Make sequelize instance using new Sequelize
- Pass in parameters (database, username, password, options object)
- Options object contains: host[localhost], dialect[mysql], pool
- Save sequelize instance to db object
- Save Sequelize to db object
- Export db

C. models/Users.js
4. Imports
- Require Sequelize from sequelize
- Require db from database/db
5. Create models using define
- Use db.sequelize.define to create a model from the data table
- First parameter is table name as string
- Second param is an object of the models you need from the table
- Export the model created
- You can create many models as you need

D. routes/Users.js
6. Imports
- Require express from express
- Require cors from cors
- Require jwt from jsonwebtoken
- Require bcrypt from bcrypt
- Require User from model/User
7. Use
- Make instance of express.Router
- Use cors function on the instance
- Set up SECRET KEY on env
8. Route Requests

*/


/*
MIDDLEWARES
*/

/*
SEQUELIZE
sequelize.define:



*/