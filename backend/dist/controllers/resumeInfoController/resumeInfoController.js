import { technicalSkills } from "../../serverData/technologies/technicalSkills.js";
import { projects } from "../../serverData/projects/projects.js";
export const getAllTechnicalSkills = async (req, res, next) => {
    try {
        res.status(200).json({ technicalSkills });
    }
    catch (error) {
        console.error(error, "Unable to get Technical Skills Data");
        res.status(500);
    }
};
export const getAllProjects = async (req, res, next) => {
    try {
        res.status(200).json({ projects });
    }
    catch (error) {
        console.error(error, "Unable to get Projects Data");
        res.status(500);
    }
};
//# sourceMappingURL=resumeInfoController.js.map