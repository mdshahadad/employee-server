import { TEmployee } from './employee.interface';
import { Employee } from './employee.model';

const createEmployeeIntoDB = async (employeeData: TEmployee) => {
  const result = await Employee.create(employeeData);
  return result;
};

export const EmployeeService = {
  createEmployeeIntoDB,
};
