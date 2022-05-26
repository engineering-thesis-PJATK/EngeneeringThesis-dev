export interface EmployeePrivilege {
    epvId: number;
    epvName: string;
    epvDescription: string;
    employeePrivilegeEmployees?: any[];
}

export interface Employee {
    empId: number;
    empLogin: string;
    empName: string;
    empSurname: string;
    empEmail: string;
    empPhoneNumber?: string;
    roles?: EmployeePrivilege[];
    employeeTeams?: any;
}

export interface EmployeeNew {
    empName: string;
    empSurname: string;
    empEmail: string;
    empPhoneNumber?: string;
    empPassword: string;
    //empPrivileges?: EmployeePrivilege[];
}

// export interface EmployeeEdit {
//     empId: number;
//     empLogin: string;
//     empName: string;
//     empSurname: string;
//     empEmail: string;
//     empPhoneNumber?: string;
//     empPrivileges: EmployeePrivilege[];
// }
export interface EmployeeEdit {
    empLogin: string;
    empName: string;
    empSurname: string;
    empEmail: string;
    empPhoneNumber: string;
}

export interface TeamEmployee {
    empId?: number;
    empName?: string;
    empSurname?: string;
    etrId?: number;
    empRole?: TeamRole;
}

export interface TeamRole {
    etrId: number;
    etrName: string;
}

export interface TempMember {
    empId: number;
    empRole: number;
}