import { CompanyAddress } from "./companyAddress";

export interface Company {
    companyName: string;
    nipPrefix: string;
    nip: string;
    regon?: string;
    krs?: string;
    landLine: string;
    companyAddresses: CompanyAddress[];
}