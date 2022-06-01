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

    export interface SingleTicketJoined {
        singleCustomer: SingleCustomer;
        singleCompany: SingleCompany;
        ticketStatuses: TicketStatus[];
        ticketTypes: TicketType[];
        ticketPriorities: TicketPriority[];
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
