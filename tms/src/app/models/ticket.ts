export interface Ticket {
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