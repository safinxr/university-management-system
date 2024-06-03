import { TAcademicSemester, nameCodeMapper } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload:TAcademicSemester) =>{
const nameCodeMapper:nameCodeMapper= {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};    

if(nameCodeMapper[payload.name] !== payload.code){
    throw new Error("Invalid Semester code")
}
 const result =await AcademicSemesterModel.create(payload);
 return result
}

const getAcademicSemester = async () =>{
  const result =await AcademicSemesterModel.find();
  return result
}

const getSingleAcademicSemester = async (id:string) =>{
  const result =await AcademicSemesterModel.findById(id);
  return result
}



export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemester,
  getSingleAcademicSemester,
};