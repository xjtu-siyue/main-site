var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('user', new Schema({
    username: {
        type: String,
        required: 'miss username',
        unique: true,
    },
    password: {
        type: String,
        required: 'miss password',
    },
    nickname: {
        type: String,
        required: 'miss nickname',
        unique: true,
    },
    // real name
    name: {
        type: String,
    },
    // personal description
    description: {
        type: String,
    },
}));