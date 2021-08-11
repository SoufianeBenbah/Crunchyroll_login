const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

app.use('/', loginRoute);
app.use('/user', userRoute);


//Connect to DB
const uri = "mongodb+srv://souf:motdepasse@firstcluster.aul9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('Connected to DB!')
    client.close();
});



app.listen(3000, () => console.log(`listening on port ${3000}`));