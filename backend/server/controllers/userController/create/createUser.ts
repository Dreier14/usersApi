import { Request, Response, NextFunction } from "express";
import { usersArray } from "../../../serverData/users/users";

export interface IUser {
    id: number,
    name: string,
    gender: string,
    age: number,
    occupation: string,
    photo: string,
    catchphrase: string,
    first_connection: Array<string>,
    second_connection: Array<string>,
    third_connection: Array<string>
}

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const payload: IUser = {
            id: usersArray.length + 1,
            gender: 'Male',
            name: 'Adam',
            age: 30,
            photo: 'none',
            catchphrase: 'Keep your code dry',
            occupation: 'SWE',
            first_connection: ['Ricky', 'Julian', 'Bubbles'],
            second_connection: ['Mr.Lahey', 'Randy'],
            third_connection: ['Ray', 'Barb Lahey']
        }
        res.status(200).json(payload);
    } catch (error: unknown) {
        console.error(error, "Unable to create User");
        res.status(500);
    }
};