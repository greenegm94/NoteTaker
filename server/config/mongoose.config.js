const mongoose = require('mongoose');

const dbName = "notes"
 
mongoose.connect('mongodb://127.0.0.1:27017/notes_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));