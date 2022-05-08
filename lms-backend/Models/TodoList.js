import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
  CreatedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  todo: {
    items: [
      {
        id: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          required: true,
        },
      },
    ],
  },

  in_progress: {
    items: [
      {
        id: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          required: true,
        },
      },
    ],
  },

  done: {
    items: [
      {
        id: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const Todo = mongoose.model("TodoList", TodoListSchema);

export default Todo;
