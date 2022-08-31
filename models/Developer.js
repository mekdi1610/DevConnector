const mongoose = require("mongoose");
const DeveloperSchema = new mongoose.Schema({
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
    overview: {
        type: String,
        required: true
    },
    cv: {
        type: Buffer,
        required: false
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
const Developer = mongoose.model("Developer", DeveloperSchema);
module.exports = Developer;
