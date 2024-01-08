import express, { Express } from "express";
import cors from "cors";

import * as resumeController from "./controllers/resumeInfoController/resumeInfoController";
import * as nodeMailerController from "./controllers/nodeMailerController/nodeMailerController";

const PORT: number = 3500;
const app: Express = express();

app.use(
    cors({
        origin: "*",
    }),
    express.json()
);

// Get Methods
app.get("/api/getTechnicalSkills", resumeController.getAllTechnicalSkills);
app.get("/api/getProjects", resumeController.getAllProjects);

app.post("/api/sendMail", nodeMailerController.sendMail);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}🚀`);
});

export default app;
