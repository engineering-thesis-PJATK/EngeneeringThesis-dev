export interface Customer {
    curId: number;
    curName: string;
    curSurname: string;
    curEmail: string;
    curPhoneNumber: string;
    curPosition: string;
    curComments: string;
    curCreatedAt: Date;
    curIdCompany: number;
}


export interface CustomerCompany {
    curId: number;
    curName: string;
    curSurname: string;
    curEmail: string;
    curPhoneNumber: string;
    curPosition: string;
    curComments: string;
    curCreatedAt: Date;
    curIdCompany: number;
    curCompanyName: string;
}

export interface CustomerSend {
    curName: string;
    curSurname: string;
    curEmail: string;
    curPhoneNumber?: string;
    curPosition: string;
    curComments: string;
}