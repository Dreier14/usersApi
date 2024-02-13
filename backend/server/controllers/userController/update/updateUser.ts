import { Request, Response, NextFunction } from "express";
import { usersArray } from "../../../serverData/users/users";

export const editUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const editId = req.body.id;
        const index = usersArray.findIndex(e=> e.id === editId);
        usersArray[index] = req.body
        res.status(200).json(usersArray);
    } catch (error: unknown) {
        console.error(error, "Unable to update User");
        res.status(500);
    }
  }