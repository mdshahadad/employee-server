import express from 'express';
import cors from 'cors';
import { EmployeeRoute } from './app/modules/employee.route';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/', EmployeeRoute);

app.get('/', (req, res) => {
  res.send('Server running');
});

export default app;
