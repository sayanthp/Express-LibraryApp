const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbSayanth:dbsay2019@cluster0-yhvgb.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    Name: String,
    Bio: String,
    Works: String,
    language: String,
    url: String
});

var Authordata = mongoose.model('Author-data', NewAuthorSchema);

module.exports = Authordata;