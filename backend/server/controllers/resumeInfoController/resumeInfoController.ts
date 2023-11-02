import { Request, Response, NextFunction } from "express";
import { technicalSkills } from "../../serverData/technologies/technicalSkills.js";
import { projects } from "../../serverData/projects/projects.js";

export const getAllTechnicalSkills = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json({ technicalSkills });
    } catch (error: unknown) {
        console.error(error, "Unable to get Technical Skills Data");
        res.status(500);
    }
};

export const getAllProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json({ projects });
    } catch (error: unknown) {
        console.error(error, "Unable to get Projects Data");
        res.status(500);
    }
};
