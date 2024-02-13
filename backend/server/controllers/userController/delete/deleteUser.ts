import { Request, Response, NextFunction } from "express";
import { usersArray } from "../../../serverData/users/users";

export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const deleteId = req.params.id;
        usersArray.forEach((e, i) => {
        if (e.id === parseInt(deleteId)) {
            usersArray.splice(i, 1);
        }
        });
        res.status(200).json(usersArray);
    } catch (error: unknown) {
        console.error(error, "Unable to delete User");
        res.status(500);
    }
}