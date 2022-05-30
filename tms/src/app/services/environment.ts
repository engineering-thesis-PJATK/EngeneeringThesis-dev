export const Environment = {
    baseUrl: 'https://localhost:5001/api',
    production: false
};


export enum ApiPaths {
  Login = '/login',
  Company = '/company',  
  Customer = '/customer',
  CustomerSelect = '/customer2',
  Employee = '/Employee/employees',
  EmployeePrivilege = '/employees/privileges',
  Team = '/team',
  Project = '/project',
  ProjectTasks = '/project/task',
  Ticket = "/ticket",
  CustomTicket= "/Ticket/CustomTicket",
  Kanban = '/kanban',
  RemindPassword = '/auth/forgotpassword'
}