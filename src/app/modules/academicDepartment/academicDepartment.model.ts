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
      ref: "AcademicFacultyModel",
    },
  },
  {
    timestamps: true,
  }
);

// academicDepartmentSchema.pre("save", async function (next) {
//   const isDepartmentExist = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       "This department is already exist!"
//     );
//   }

//   next();
// });

// academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
//   const query = this.getQuery();
//   const isDepartmentExist = await AcademicDepartment.findOne(query);

//   if (!isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       "This department does not exist! "
//     );
//   }

//   next();
// });

export const DepartmentModel = model<TDepartment>("Department", DepartmentSchema);
