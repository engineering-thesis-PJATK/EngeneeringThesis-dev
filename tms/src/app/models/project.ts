export interface Project {
    prjId: number;
    prjName: string;
    prjDescription: string;
    companyId: number;
    companyName: string;
    teamId: number;
    teamName: string;
}

export interface ProjectSending {
    prjName: string;
    prjDescription: string;
    companyId: number;
    teamId: number;
}