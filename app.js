const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const chalk = require('chalk');
const path = require('path');



var app = express();

nav = [{
        link: '/Books',
        title: 'Books'
    },
    {
        link: '/authors',
        title: 'Authors'
    },
    {
        link: '/Signup',
        title: 'Sign up'
    },
    {
        link: '/login',
        title: 'Log in'
    },
    {
        link: '/admin/addBook',
        title: 'Add Book'
    },
    {
        link: '/admin/addAuthor',
        title: 'Add Author'
    }
];

const booksRouter = require('./src/Routes/bookRoutes')(nav);

const authorRouter = require('./src/Routes/authorRoutes')(nav);

const signupRouter = require('./src/Routes/signupRoutes')(nav);

const loginRouter = require('./src/Routes/loginRoutes')(nav);

const adminRouter = require('./src/Routes/adminRoutes')(nav);


app.use(session({
    store: new MongoStore({
        url: 'mongodb+srv://dbSayanth:dbsay2019@cluster0-yhvgb.gcp.mongodb.net/test?retryWrites=true&w=majority',
        autoRemove: 'interval',
        autoRemoveInterval: 3
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 5 // 5 minutes session
    },
    flag: 0
}));







app.use('/Books', booksRouter);
app.use('/authors', authorRouter);
app.use('/Signup', signupRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);

app.use(express.static(path.join(__dirname, "public")));
app.set('views', './src/views');
app.set('view engine', 'ejs');






app.get('/', (req, res) => {

    if (req.session.flag == 1) {
        res.render('index', {
            nav,
            title: 'Library',
            flag: 1


        });

    } else {
        res.render('index', {

            nav,
            title: 'Library',
            flag: 0

        });

    }




});

app.listen(3000, () => {
    console.log('Listening to port number ' + chalk.yellow('3000') + chalk.red('!!!!'));
});