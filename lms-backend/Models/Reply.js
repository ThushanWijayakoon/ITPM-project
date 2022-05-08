import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    reply: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const Reply = mongoose.model('Reply', ReplySchema);

export default Reply;