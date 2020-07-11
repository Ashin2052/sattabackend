const mongoose = require('mongoose')

var paragraphSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },

    paragraph: {
        type: String,

    },
}, {
    timestamps: true
});

const paragraphModel = mongoose.model("paragraphSchema", paragraphSchema);
module.exports = paragraphModel;