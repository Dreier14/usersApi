import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

import * as resumeController from "./controllers/resumeInfoController/resumeInfoController";
import * as nodeMailerController from "./controllers/nodeMailerController/nodeMailerController";
import * as chatGptController from "./controllers/chatGptController/chatGptController";

const app: Express = express();
const { NODE_FRONTEND_URL, NODE_PORT } = process.env;

console.log();

app.use(
    cors({
        origin: `${NODE_FRONTEND_URL}`,
    }),
    express.json()
);

// Get Methods
app.get("/api/getTechnicalSkills", resumeController.getAllTechnicalSkills);
app.get("/api/getProjects", resumeController.getAllProjects);

app.post("/api/sendMail", nodeMailerController.sendMail);
app.post("/api/getChatGptResponse", chatGptController.getChatGptResponse);

app.listen(NODE_PORT, () => {
    console.log(`Server is running on port ${NODE_PORT}🚀`);
});

export default app;
