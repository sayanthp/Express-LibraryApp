const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbSayanth:dbsay2019@cluster0-yhvgb.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); //mongodb://localhost:27017/libraryAppMongoose3


mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    password: String,
    conf_password: String
});

var Userdata = mongoose.model('User-data', NewUserSchema);

module.exports = Userdata;