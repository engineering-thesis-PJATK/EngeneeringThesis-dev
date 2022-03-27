export const Environment = {
    baseUrl: 'http://localhost:5001/api',
    production: false
};

export enum ApiPaths {
    Login = '/login',
    Company = '/company',
    Employee = '/employees',
    EmployeePrivilege = '/employees/privileges'
}