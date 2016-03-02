var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('user', new Schema({
    username : {
        type : String,
        required : 'miss username',
        unique : true,
    }
}));