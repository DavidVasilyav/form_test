const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const FormDatabase = require('./database/schema/FormSchema')
const app = express();

///server utils
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());


///connect to db
async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect('mongodb+srv://David:0256520@formdata.hrgoaeq.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to mongoDB'))
    .catch((err) => console.log(err));
    
  }
  main().catch(err => console.log(err));



///routes
app.post('/form', async (req,res ) => {
    const newDataFromForm = await FormDatabase.create(req.body)
})

app.get('/post', async (req, res) => {
    console.log(FormDatabase.find);
    res.send( FormDatabase.find)
})

///server
app.listen(4545, () => {
    console.log('server is on | PORT 4545');
})