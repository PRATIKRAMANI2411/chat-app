const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 30,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        requrie: true,
        max: 8
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
});
module.exports = mongoose.model("users", userSchema);