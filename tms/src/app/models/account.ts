import { Credentials } from "./credentials";

export interface Account {
    firstName: string;
    lastName: string;
    mobile: string;
    comapny: string;
    credentials: Credentials;
}