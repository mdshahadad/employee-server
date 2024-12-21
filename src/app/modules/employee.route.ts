import express from 'express';
import { controller } from './employee.controller';

const router = express.Router();

router.post('/create-employee', controller.createEmployee);

export const EmployeeRoute = router;
