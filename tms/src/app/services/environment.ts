export const Environment = {
    baseUrl: 'https://localhost:5001/api',
    production: false
};


export enum ApiPaths {
  Login = '/auth/login',
  Company = '/company',
  Customer = '/customer',
  CustomerSelect = '/customer2',
  Employee = '/Employee/employees',
  EmployeePrivilege = '/employees/privileges',
  Team = '/team',
  Project = '/project',
  ProjectTasks = '/project/task',
  Ticket = "/ticket",
  Kanban = '/kanban',
  RemindPassword = '/auth/forgotpassword'
}