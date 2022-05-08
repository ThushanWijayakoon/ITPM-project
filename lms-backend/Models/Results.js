import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
  },
  status: {
    type: Boolean,
    default: false
  },
  passedAmount: {
      type: Number
  },
  failedAmount: {
      type: Number
  },
  holdAmount: {
      type: Number
  },
  students: [
    {
      student: {
        type: mongoose.Types.ObjectId,
        ref: "User"
      },
      grade: {
        type: String
      },
      status: {
        type: Boolean,
        default: false
      }
    }
  ]
});

const Result = mongoose.model('Results', UserSchema);

export default Result;
