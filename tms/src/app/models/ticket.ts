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
// export interface TicketKanBan{
//     ticId: number;
//     ticName: string;
//     ticTopic: string;
//     ticDueDate: string;
// }



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
