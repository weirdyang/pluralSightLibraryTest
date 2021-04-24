const express = require('express');
const {MongoClient} = require('mongodb');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
    authRouter.route('/signUp') 
        .post((req,res) => {
            //if (req.body.username == '123') {console.log('success')};
            console.log('hi');
            debug(req.body);
        });
    return authRouter;
};

module.exports = router;