const express = require('express');
const authorRouter = express.Router();
const mongoose = require('mongoose');
const Authordata = require('../model/Authordata.js');


function router(nav) {



    authorRouter.route('/')
        .get((req, res) => {
            Authordata.find()
                .then(function(authors) {
                    console.log(authors);
                    res.render('authors', {

                        nav,
                        title: 'Authors',
                        authors,
                        flag: req.session.flag


                    });
                });

        });

    authorRouter.route('/:id')
        .get((req, res) => {
            var id = req.params.id;
            Authordata.findById(id)
                .then(function(authors) {

                    res.render('author', {
                        nav,
                        title: 'Authors',
                        'author': authors,
                        flag: req.session.flag

                    });
                });

        });


    return authorRouter;

};

module.exports = router;