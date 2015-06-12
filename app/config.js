var mongoose = require('mongoose');

//database names cannot contain the character '.'
//TODO - use process.env.NODE_ENV to choose a db
//one for local deploy
//one for testing
//one for production
if(process.env.NODE_ENV === 'production'){
  mongoose.connect(process.env.MONGO_DB)
} else{
  mongoose.connect('mongodb://localhost/shortlydb');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('MongoDB connection is open!');
});


module.exports = db;
