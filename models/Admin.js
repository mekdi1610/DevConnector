const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    middleName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        references: {
            model: 'User',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    }
}, {
    timestamps: true
});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
