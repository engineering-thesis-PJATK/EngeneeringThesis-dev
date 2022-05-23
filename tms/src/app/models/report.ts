
export interface timeEntryReport{
    terId: number;
    terTicketTitle: string;
    terDescription: string;
    terTimeValue: string;
    terDate: string;
    terCompany: string;
}

export interface timeEntryHeader {
    tehId: number;
    tehGroupTitle: string;
    tehGroupTimeSum: string;
    tehDetails: timeEntryReport[];
}

