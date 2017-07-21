'use strict';

module.exports = function (app) {
    var userList = require('../controllers/userListController');

//missed parentesis
    app.route('/users')
        .get(userList.list_all_users)
            .post(userList.create_a_user);


    app.route('users/:userId')
        .get(userList.read_a_user);

};