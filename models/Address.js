const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,

    },
    subcity: {
        type: String,
        required: true,

    }
}, {
    timestamps: true
});
const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
