export interface IProjects {
    data: { projects: IProjectsDictionary };
}

export interface IProjectsDictionary {
    [key: string]: IProjectsData;
}

interface IProjectsData {
    Photo: string;
    Info: string;
    Details: Array<string>;
    TechStack: Array<string>;
    Link: string;
    IsDeployed: string;
}
