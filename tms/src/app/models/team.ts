import { TeamEmployee } from "./employee";

export interface Team {
    Name: string;
    members: TeamEmployee[];
}

export interface TeamSimple {
    id: number;
    Name: string;
}