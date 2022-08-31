const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
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
    type: {
        type: String,
        required: true,
        enum: ['Personal', 'Cooperation']
    },
    flag: {
        type: Boolean,
        default: false
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
const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
