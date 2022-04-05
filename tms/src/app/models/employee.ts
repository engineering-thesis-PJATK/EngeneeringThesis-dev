export interface Employee {
    empId: number;
    empLogin: string;
    empName: string;
    empSurname: string;
    empEmail: string;
    empPhoneNumber?: string;
}

export interface EmployeeSend {
    empLogin: string;
    empPassword: string;
    empName: string;
    empSurname: string;
    empEmail: string;
    empPhoneNumber?: string;
    empPrivileges: [];
}