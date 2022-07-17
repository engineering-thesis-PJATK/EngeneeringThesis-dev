export interface SingleTicket {
    ticId: number;
    ticName: string;
    ticTopic: string;
    ticEstimatedCost: number;
    ticDueDate: Date,
    ticCompletedAt: Date;
    ticCreatedAt: Date;
    ticDescription: string;
    ticTicketStatusId: number;
    ticCustomerId: number;
    ticTicketTypeId: number;
    ticTicketPriorityId: number;
}
export interface SingleCustomer {
    curName: string;
    curSurname: string;
    curEmail: string;
    curPhoneNumber: string;
    curPosition: string;
    curComments: string;
}

export interface SingleCompany {
    cmpName: string;
    cmpNip: string;
    cmpNipPrefix: string;
    cmpRegon?: any;
    cmpKrsNumber: string;
    cmpLandline: string;
}

export interface TicketList {
    singleCustomer: SingleCustomer;
    singleCompany: SingleCompany;
    ticId: number;
    ticName: string;
    ticTopic: string;
    ticEstimatedCost: number;
    ticDueDate: Date;
    ticCompletedAt: Date;
    ticCreatedAt: Date;
    ticDescription: string;
    ticTicketStatusId: number;
    ticCustomerId: number;
    ticTicketTypeId: number;
    ticTicketPriorityId: number;
}


    export interface TicketStatus {
        tstId: number;
        tstName: string;
        tstDescription: string;
    }

    export interface TicketType {
        ttpId: number;
        ttpName: string;
        ttpDescription: string;
    }

    export interface TicketPriority {
        tpiId: number;
        tpiWeight: number;
        tpiDescription: string;
    }
    export interface EmployeesForCustomTicket{
        empId: number;
        empLogin: string;
        empPassword: string;
        empName: string;
        empSurname: string;
        empEmail: string;
        empPhoneNumber: string;
        empCreatedAt: Date;
        employeePrivilegeEmployees: any[];
        employeeTeams: any[];
        employeeTickets: any[];
        organizationalTasks: any[];
        timeEntries: any[];
    }

    export interface SingleTicketJoined {
        singleCustomer: SingleCustomer;
        singleCompany: SingleCompany;
        ticketStatuses: TicketStatus[];
        ticketTypes: TicketType[];
        ticketPriorities: TicketPriority[];
        employees: EmployeesForCustomTicket[];
        ticId: number;
        ticName: string;
        ticTopic: string;
        ticEstimatedCost: number;
        ticDueDate: Date;
        ticCompletedAt: Date;
        ticCreatedAt: Date;
        ticDescription: string;
        ticTicketStatusId: number;
        ticCustomerId: number;
        ticTicketTypeId: number;
        ticTicketPriorityId: number;
        employeeAssignedToTicket: number;
    }
