import { Request, Response, NextFunction } from "express";
import { usersArray } from "../../../serverData/users/users";

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
    const { id } = req.params;
    const list = usersArray.filter(e => {
      if (e.id === parseInt(id)) {
        return e;
      }
    });
    res.status(200).json(list);
    } catch (error: unknown) {
        console.error(error, "Unable to get User");
        res.status(500);
    }
};

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
    res.status(200).json(usersArray);
    } catch (error: unknown) {
        console.error(error, "Unable to get all Users");
        res.status(500);
    }
};