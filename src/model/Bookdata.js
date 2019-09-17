const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbSayanth:dbsay2019@cluster0-yhvgb.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    title: String,
    genre: String,
    authorname: String,
    Bio: String,
    language: String,
    url: String
});

var Bookdata = mongoose.model('Book-data', NewBookSchema);

module.exports = Bookdata;