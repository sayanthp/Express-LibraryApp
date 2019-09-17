const express = require('express');
const booksRouter = express.Router();
const mongoose = require('mongoose');
const Bookdata = require('../model/Bookdata.js');

function router(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            Bookdata.find()
                .then(function(books) {
                    console.log(books);
                    res.render('Books', {

                        nav,
                        title: 'Books',
                        books,
                        flag: req.session.flag


                    });
                });

        });

    booksRouter.route('/:id')
        .get((req, res) => {
            var id = req.params.id;
            Bookdata.findById(id)
                .then(function(books) {

                    res.render('Book', {
                        nav,
                        title: 'Books',
                        'book': books,
                        flag: req.session.flag


                    });
                });
        });

    return booksRouter;
};
module.exports = router;