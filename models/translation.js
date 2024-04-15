const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Translation", translationSchema);