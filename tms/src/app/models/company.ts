import { CompanyAddress } from "./companyAddress";

export interface CompanyCard {
    cmpId?: number;
    cmpName: string;
    cmpNip: string;
    cmpNipPrefix: string;
    cmpRegon?: string;
    cmpKrsNumber?: string;
    cmpLandLine: string;
    cmpIdAddress: number;
}

export interface CompanySend {
    cmpName: string;
    cmpNip: string;
    cmpNipPrefix: string;
    cmpRegon?: string;
    cmpKrsNumber?: string;
    cmpLandLine: string;
    companyAddresses: CompanyAddress;
}