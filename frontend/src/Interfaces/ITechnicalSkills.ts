export interface ITechnicalSkills {
    data: { technicalSkills: ITechnicalSkillsDictionary };
}

export interface ITechnicalSkillsDictionary {
    [key: string]: Array<string>;
}
