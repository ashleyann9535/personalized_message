const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emailData', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the Email Data database'))
    .catch((err) => console.log('Something went wrong when connecting to the Email Data database', err))