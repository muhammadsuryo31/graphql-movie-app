require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config')
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 3001;
const schema = require('./src/schema/index');

const app = express();

app.use(cors());

connectDB();

app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    })
)

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
})
