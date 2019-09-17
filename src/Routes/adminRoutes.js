const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata.js');
const Authordata = require('../model/Authordata.js');



function router(nav) {

    adminRouter.route('/addBook')
        .get((req, res) => {

            if (req.session.flag == 1) {
                res.render('addBook', {

                    nav,
                    title: 'Add Book',
                    flagUpdate: 0,
                    flag: req.session.flag
                });
            } else {
                res.redirect('/login');
            }
        });


    adminRouter.route('/addBook/add')
        .get((req, res) => {
            var item = {
                title: req.param("title"),
                genre: req.param("genre"),
                authorname: req.param("authorname"),
                Bio: req.param("Bio"),
                language: req.param("language"),
                url: req.param("image")
            }
            var Book = new Bookdata(item);
            Book.save();
            res.redirect('/Books');
        });

    adminRouter.route('/delete-book/:id')
        .get((req, res) => {
            if (req.session.flag == 1) {
                var id = req.params.id;
                Bookdata.findByIdAndDelete(id)
                    .then(res.redirect('/Books'));
            } else {
                res.redirect('/login');
            }


        });

    adminRouter.route('/update-book/:id')
        .get((req, res) => {
            if (req.session.flag == 1) {
                var id = req.params.id;
                Bookdata.find({ _id: id })
                    .then((results) => { res.render('addBook', { nav, title: "Update Book", book: results[0], id, flagUpdate: 1 }) });
            } else {
                res.redirect('/login');
            }
        });

    adminRouter.route('/update-book/update/:id')
        .get((req, res) => {
            var id = req.params.id;
            var item = {
                title: req.param("title"),
                genre: req.param("genre"),
                authorname: req.param("authorname"),
                Bio: req.param("Bio"),
                language: req.param("language"),
                url: req.param("image")
            }
            Bookdata.update({ _id: id }, item, () => {
                res.redirect('/Books');
            });
        });







    adminRouter.route('/addAuthor')
        .get((req, res) => {
            if (req.session.flag == 1) {
                res.render('addAuthor', {

                    nav,
                    title: 'Add Author',
                    flagUpdate: 0,
                    flag: req.session.flag


                });

            } else {
                res.redirect('/login');
            }

        });


    adminRouter.route('/addAuthor/addd')
        .get((req, res) => {
            var item = {
                Name: req.param("Name"),
                Bio: req.param("Bio"),
                Works: req.param("works"),
                language: req.param("language"),
                url: req.param("image")
            }


            var Author = new Authordata(item);
            Author.save();
            res.redirect('/authors');
        });



    adminRouter.route('/delete-Author/:id')
        .get((req, res) => {
            if (req.session.flag == 1) {
                var id = req.params.id;
                Authordata.findByIdAndDelete(id)
                    .then(res.redirect('/authors'));

            } else {

                res.redirect('/login');
            }

        });


    adminRouter.route('/update-Author/:id')
        .get((req, res) => {
            if (req.session.flag == 1) {
                var id = req.params.id;
                Authordata.find({ _id: id })
                    .then((results) => {
                        res.render('addAuthor', { nav, title: "Update Author", author: results[0], id, flagUpdate: 1 });
                    });
            } else {
                res.redirect('/login');
            }
        });

    adminRouter.route('/update-Author/update/:id')
        .get((req, res) => {
            var id = req.params.id;
            var item = {
                Name: req.param("Name"),
                Bio: req.param("Bio"),
                Works: req.param("works"),
                language: req.param("language"),
                url: req.param("image")

            }

            Authordata.update({ _id: id }, item, () => {
                res.redirect('/authors');
            });
        });



    return adminRouter;
}
module.exports = router;