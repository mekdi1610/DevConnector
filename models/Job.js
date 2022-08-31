const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        max: 200
    },
    lastName: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
        enum: ['Onetime', 'Contract', 'Parttime', 'Fulltime']
    },
    skill: {
        type: String,
        required: true
    },
    flag: {
        type: Boolean,
        default: false
    },
    rate: {
        type: Integer,
        required: false,
        enum: [1, 2, 3, 4, 5]
    },
    status: {
        type: String,
        required: true,
        enum: ['Closed', 'Open', 'Paused']
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        references: {
            model: 'Address',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },

    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        references: {
            model: 'Client',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    }
}, {
    timestamps: true
});
const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
