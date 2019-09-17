const express = require('express');
const loginRouter = express.Router();
const mongoose = require('mongoose');
const Userdata = require('../model/User.js');


function router(nav) {
    loginRouter.route('/')
        .get((req, res) => {

            res.render('login', {

                nav,
                title: 'Log in',
                flag: 0


            });


        });

    loginRouter.route('/log-in')
        .get((req, res) => {
            var id = req.params.id;
            var item = {
                name: req.param("name"),
                password: req.param("password")

            }
            console.log(req);

            Userdata.find({ $and: [{ "name": item.name }, { "password": item.password }] })
                .then((data) => {
                    req.session.flag = 1;
                    res.redirect('/');
                });



        });
    return loginRouter;
}
module.exports = router;