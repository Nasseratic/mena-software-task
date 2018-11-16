import mongoose from "mongoose";

var schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    disc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.model("News", schema, "News");
