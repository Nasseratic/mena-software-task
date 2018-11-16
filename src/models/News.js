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
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.model("News", schema, "News");
