const express = require('express');
const signupRouter = express.Router();
const mongoose = require('mongoose');
const Userdata = require('../model/User.js');

function router(nav) {
    signupRouter.route('/')
        .get((req, res) => {
            res.render('Signup', {

                nav,
                title: 'Sign up',
                flag: req.session.flag


            });
        });

    signupRouter.route('/sign-up')
        .get((req, res) => {
            var id = req.params.id;
            var item = {
                name: req.param("name"),
                email: req.param("email"),
                address: req.param("address"),
                phone: req.param("phone"),
                password: req.param("password"),
                conf_password: req.param("conf_password")
            }
            var User = new Userdata(item);
            User.save();
            res.redirect('/');


        });




    return signupRouter;
}
module.exports = router;