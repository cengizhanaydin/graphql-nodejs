const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const Schema = mongoose.Schema;



const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
        autopopulate: true
    }]
});


module.exports = mongoose.model('User', userSchema.plugin(autopopulate));