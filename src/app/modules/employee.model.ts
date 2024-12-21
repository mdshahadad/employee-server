import { model, Schema } from 'mongoose';
import { TAddress, TEmployee, TEmployeeName } from './employee.interface';

const addressSchema = new Schema<TAddress>({
  street: { type: String },
  city: { type: String },
  zipCode: { type: String },
  country: { type: String },
});

const employeeNameSchema = new Schema<TEmployeeName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const employeeSchema = new Schema<TEmployee>({
  id: { type: String, unique: true },
  name: employeeNameSchema,
  age: { type: Number },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  position: { type: String },
  department: { type: String },
  salary: { type: String },
  isActive: { type: String, enum: ['true', 'false'] },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  address: addressSchema,
  hireData: { type: String },
  skills: { type: [String], default: [] },
  reportsTo: { type: String },
});

export const Employee = model<TEmployee>('Employee', employeeSchema);
