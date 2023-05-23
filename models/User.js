const mongoose = require("mongoose")

mongoose.export = mongoose.model("user", mongoose.Schema)({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        default: true
    },
})

// mongoose.export = mongoose.model("user", mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     password:{
//         type: String,
//         required: true
//     },
//     active:{
//         type: Boolean,
//         default: true
//     },
// }))