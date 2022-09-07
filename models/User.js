const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Client', 'Developer']
    }
}, {
    timestamps: true
});
const User = mongoose.model("User", UserSchema);
module.exports = {
    User
}
