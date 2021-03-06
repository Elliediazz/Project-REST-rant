require('dotenv').config()
const mongoose = require('mongoose')

//db connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));


module.exports.Place = require('./places')
module.exports.Comment = require('./comment')