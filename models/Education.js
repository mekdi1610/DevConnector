const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    institiuationName: {
        type: String,
        required: true,

    },
    achievements: {
        type: String,
        required: false,
        max: 200
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
        default: Date.now,
    },
    developer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        references: {
            model: 'Developer',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    }
}, {
    timestamps: true
});
const education = mongoose.model("Education", educationSchema);
module.exports = education;
