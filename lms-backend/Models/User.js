import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  regNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  profile_photo: {
    type: String,
  },
  bio: {
    type: String
  },
  modules: [
    {
      module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module"
      },
    }
  ]
});

const User = mongoose.model("User", UserSchema);

export default User;