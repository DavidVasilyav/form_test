const { Schema, model } = require('mongoose');


const newSubmitSchema = new Schema ({
    title: {
        type: String,
        required: [true]
    },

    imgUrl: {
        type: String,
        required: [true]

    }
})

const NewFormData = model("FormData", newSubmitSchema)

module.exports = NewFormData;