import { CompanyAddress } from "./companyAddress";

export interface CompanyCard {
    // cmpId?: number;
    // cmpName: string;
    // cmpNip?: string;
    // cmpNipPrefix?: string;
    // cmpRegon?: string;
    // cmpKrsNumber?: string;
    // cmpLandLine?: string;
    // cmpIdAddress?: number;
    // cmpCity: string;
    // cmpCountry: string;
    cmpId?: number,
    cmpName: string,
    cmpNip?: string,
    cmpNipPrefix?: string,
    cmpRegon?: string,
    cmpKrsNumber?: string,
    cmpLandline?: string,
    addresses?: [],
    companyNotes?: [],
    customers?: [],
    projects?: []
}

export interface CompanySend {
    cmpName: string;
    cmpNip: string;
    cmpNipPrefix: string;
    cmpRegon?: string;
    cmpKrsNumber?: string;
    cmpLandLine: string;
    companyAddresses: CompanyAddress[];
}

export interface CompanySelect {
    cmpId: number;
    cmpName: string;
}