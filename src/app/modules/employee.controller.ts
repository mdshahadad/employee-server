import { Request, Response } from 'express';
import { EmployeeService } from './employee.service';

const createEmployee = async (req: Request, res: Response) => {
  try {
    const { employeeData } = req.body;
    const result = await EmployeeService.createEmployeeIntoDB(employeeData);
    console.log('At the controller: ', result);

    res.status(200).json({
      success: true,
      message: 'Employee data created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const controller = {
  createEmployee,
};
