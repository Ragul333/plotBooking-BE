const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    role: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;