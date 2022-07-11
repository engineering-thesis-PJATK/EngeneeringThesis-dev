import { CompanyAddress } from "./companyAddress";

export interface Company {
    cmpId?: number,
    cmpName: string,
    cmpNip?: string,
    cmpNipPrefix?: string,
    cmpRegon?: string,
    cmpKrsNumber?: string,
    cmpLandline?: string,
    // addresses?: [],
    // companyNotes?: [],
    // customers?: [],
    // projects?: []
}

export interface CompanySend {
    cmpName: string;
    cmpNip: string;
    cmpNipPrefix: string;
    cmpRegon?: string;
    cmpKrsNumber?: string;
    cmpLandLine: string;
}

// export interface CompanySelect {
//     cmpId: number;
//     cmpName: string;
// }


export interface CompanySelection {
    selected: boolean;
    company: Company;
  };