import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

import { getUser, getAllUsers } from "./controllers/userController/read/getUser";
import { deleteUser } from "./controllers/userController/delete/deleteUser";
import { editUser } from "./controllers/userController/update/updateUser";
import { createUser } from "./controllers/userController/create/createUser";

const app: Express = express();
const { NODE_PORT } = process.env;

// Get/Read Methods
app.get('/api/user/:id', getUser);
app.get('/api/allUsers', getAllUsers);

// Create
app.post('/api/newUser', createUser);

// Get Methods
app.put('/api/updateUser/:id', editUser);

// Get Methods
app.delete('/api/deleteUser/:id', deleteUser);

app.listen(NODE_PORT, () => {
    console.log(`Server is running on port ${NODE_PORT}🚀`);
});

export default app;
