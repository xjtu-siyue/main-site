var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('repository', new Schema({
    name : {
        type : String,
        required : 'miss name',
        unique : true,
    },
    owner : {
        type : Schema.Types.ObjectId,
        required : 'miss owner',
    },
    ssh : {
        type : String,
        required : 'miss ssh url',
    }
}));