const mongoose = require("mongoose");
require('dotenv/config');

mongoose.connect(process.env.HOST_MONGODB,{
useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true,
});


mongoose.promise = global.Promise;

module.exports = mongoose;