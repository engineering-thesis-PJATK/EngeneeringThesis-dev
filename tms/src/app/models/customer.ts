export interface Customer {
    cur_id: number;
    cur_name: string;
    cur_surname: string;
    cur_email: string;
    cur_phoneNumber?: string;
    cur_position: string;
    cur_comments: string;
    cur_idCompany: number;
    cmp_name?: string;
}


export interface CustomerCompany {
    cur_id: number;
    cur_name: string;
    cur_surname: string;
    cur_email: string;
    cur_phoneNumber?: string;
    cur_position: string;
    cur_comments: string;
    cur_idCompany: number;
    cmp_name: string;
}

export interface CustomerSend {
    cur_name: string;
    cur_surname: string;
    cur_email: string;
    cur_phoneNumber?: string;
    cur_position: string;
    cur_comments: string;
    cur_idCompany: number;
}