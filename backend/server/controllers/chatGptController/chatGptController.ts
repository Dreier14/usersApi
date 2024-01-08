import { Request, Response, NextFunction } from "express";
import { OpenAI } from "openai";
import "dotenv/config";

const { NODE_OPEN_AI_API_KEY } = process.env;

const openai = new OpenAI({
    apiKey: NODE_OPEN_AI_API_KEY,
});

export const getChatGptResponse = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { prompt } = req.body;
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4",
        });
        res.status(200).json({ chatCompletion });
    } catch (error: unknown) {
        console.error(error, "Unable to call OpenAI Api");
        res.status(500);
    }
};
