import { unknown, z } from "zod";

// Define Zod schemas for nested schemas first
const userNameValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

// Define the main student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  email: z.string().min(1, "Email is required").email("not an email"),
  contactNo: z
    .string()
    .min(1, "Contact number is required")
    .max(11, "number can't be more than 11"),
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  isActive: z.boolean().optional(),
  profileImage: z.string().optional(),
});

export default studentValidationSchema;
