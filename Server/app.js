const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://tushar27:tushar27@cluster0.eovdi.mongodb.net/tushar27?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=>{
    console.log('conneted to database');
});
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(2000, () => {
    console.log('now listening for requests on port 4000');
});



