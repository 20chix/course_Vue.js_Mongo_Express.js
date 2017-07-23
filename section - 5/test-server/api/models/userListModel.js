'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
        email: {
        type: String,
        Required: 'Please enter'
    },
    Created_date:{
        type: Date,
        default :Date.now

    },

});

//one o instead of 2
module.exports = mongoose.model('Users', UserSchema);