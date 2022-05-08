import mongoose from 'mongoose';

const TimetableSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
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

const Timetable = mongoose.model("Timetable", TimetableSchema);

export default Timetable;