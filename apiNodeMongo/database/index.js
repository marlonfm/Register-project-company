const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/nodetesteapiii',{
useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true,
});


mongoose.promise = global.Promise;

module.exports = mongoose;