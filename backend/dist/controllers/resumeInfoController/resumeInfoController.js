"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProjects = exports.getAllTechnicalSkills = void 0;
const technicalSkills_js_1 = require("../../serverData/technologies/technicalSkills.js");
const projects_js_1 = require("../../serverData/projects/projects.js");
const getAllTechnicalSkills = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ technicalSkills: technicalSkills_js_1.technicalSkills });
    }
    catch (error) {
        console.error(error, "Unable to get Technical Skills Data");
        res.status(500);
    }
});
exports.getAllTechnicalSkills = getAllTechnicalSkills;
const getAllProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ projects: projects_js_1.projects });
    }
    catch (error) {
        console.error(error, "Unable to get Projects Data");
        res.status(500);
    }
});
exports.getAllProjects = getAllProjects;
//# sourceMappingURL=resumeInfoController.js.map