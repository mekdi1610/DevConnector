const mongoose = require("mongoose");
const workHistorySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,

    },
    mainRole: {
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
const workHistory = mongoose.model("WorkHistory", workHistorySchema);
module.exports = workHistory;
