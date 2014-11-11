var mongoose = require('mongoose');

module.exports = mongoose.model('Tournament', {
    yearstring : {type : String, default: ''}
});

