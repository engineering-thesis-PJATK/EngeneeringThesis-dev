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

export interface TeamEmployee {
    empId: number;
    empName: string;
    empSurname: string;
    empRole: TeamRole;
}

export interface TeamRole {
    etrId: number;
    etrName: string;
}