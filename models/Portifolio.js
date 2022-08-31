const mongoose = require("mongoose");
const portifolioSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: false,
        max: 200
    },
    image1: {
        type: String,
        required: false,
    },
    image2: {
        type: String,
        required: false,
    },
    image3: {
        type: String,
        required: false,
    },
    image4: {
        type: String,
        required: false,
    },

    image5: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true,
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
const portifolio = mongoose.model("Portifolio", portifolioSchema);
module.exports = portifolio;
