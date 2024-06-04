import { Schema, model } from "mongoose";
import { TFaculty } from "./academicFaculty.interface";

const facultySchema = new Schema<TFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Faculty = model<TFaculty>("Faculty", facultySchema);
