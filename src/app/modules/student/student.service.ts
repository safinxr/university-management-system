import { Student } from "./student.model";
import { TStudent } from "./student.interface";

const createStudentIntoDB = async (student: TStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentFromBD = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};

const getSingleStudentFromBD = async (id: string) => {
  const result = await Student.findOne({ id: id })
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });;
  return result;
};


const deleteStudent = async(id:string)=>{
  const result = await Student.findOneAndUpdate({_id:id}, {isDeleted: true}, {new:true})
  return result
}

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromBD,
  getSingleStudentFromBD,
  deleteStudent,
};
