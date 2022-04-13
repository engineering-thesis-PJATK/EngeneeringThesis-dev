import { TeamEmployee } from "./employee";

export interface Team {
    Name: string;
    members: TeamEmployee[];
}

export interface TeamSelect {
    id: number;
    Name: string;
}