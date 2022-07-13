// export interface Project {
//     prjId: number;
//     prjName: string;
//     prjDescription: string;
//     companyId: number;
//     companyName: string;
//     teamId: number;
//     teamName: string;
// }

export interface Project {
    proId: number;
    proName: string;
    proDescription: string;
    proCreatedAt: Date;
    proCompletedAt?: any;
    proIdCompany: number;
    proIdTeam: number;
    proIdProjectStatus: number;
    proCompanyName: string;
    proTeamName: string;
}

export interface ProjectSending {
    prjName: string;
    prjDescription: string;
    companyId: number;
    teamId: number;
}

export interface ProjectTask {
    ptId: number;
    ptEmpId: number;
    ptEmpName?: string;
    ptContent: string;
    ptEstimatedCost: number;
    ptState: string;
}

export interface TaskTime {
    ptTaskId: number;
    ptDate: Date;
    ptMinutes: number;
}