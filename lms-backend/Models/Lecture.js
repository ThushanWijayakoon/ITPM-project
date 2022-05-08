import mongoose from 'mongoose';

const LectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        requred: true,
    },
    module_code: {
        type: String,
        required: true,
    },
    week: {
        type: String,
        required: true,
    }, 
    filePath: {
        type: String,
    },
    description: {
        type: String,
    },
})

const Lecture = mongoose.model("Lecture", LectureSchema);

export default Lecture;