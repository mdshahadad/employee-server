export type TAddress = {
  street: string;
  city: string;
  zipCode: string;
  country: string;
};

export type TEmployeeName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TEmployee = {
  id: string;
  name: TEmployeeName;
  age: number;
  gender: 'male' | 'female' | 'other';
  position: string;
  department: string;
  salary: string;
  isActive: 'true' | 'false';
  email: string;
  phone: string;
  address: TAddress;
  hireData: string;
  skills: [string];
  reportsTo: string;
};
