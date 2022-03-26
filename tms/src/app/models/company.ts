import { CompanyAddress } from "./companyAddress";

export interface Company {
    id?: number;
    companyName: string;
    nipPrefix: string;
    nip: string;
    regon?: string;
    krs?: string;
    landLine: string;
    companyAddresses: CompanyAddress;
}