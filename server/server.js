const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');

//routes
require('./routes/member.routes')(app)


app.listen(8000, () => {
    console.log('Listening on port 8000')
})