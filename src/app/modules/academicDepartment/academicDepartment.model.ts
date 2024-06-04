import { Schema, model } from "mongoose";
import { TDepartment } from "./academicDepartment.interface";

const DepartmentSchema = new Schema<TDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
  },
  {
    timestamps: true,
  }
);

DepartmentSchema.pre("save", async function (next) {
  const isDepartmentExist = await Department.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error("This department is already exist!");
  }

  next();
});

DepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await Department.findOne(query);

  if (!isDepartmentExist) {
    throw new Error("This department does not exist! ");
  }

  next();
});

export const Department = model<TDepartment>("Department", DepartmentSchema);
