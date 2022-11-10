const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3],
        maxlength: [99]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3],
        maxlength: [99]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Your password is too weak..."]
    },

    // this was a capital before , so changed to work with old users
   favouritewine: [{ type: mongoose.Schema.Types.ObjectId,
    ref: 'FavouriteWines'
}]
},
{
    timestamps: true
});


userSchema.methods.verifyPassword = function(password) {
    console.log("password from User: " + password);
    console.log("password from Database: " + this.password);
    return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model("User", userSchema);

module.exports = User;