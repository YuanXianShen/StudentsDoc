const mongoose = require('mongoose');
const studentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 16,
        maxlength: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }

});
const Student = mongoose.model('Student', studentsSchema);
module.exports = Student;