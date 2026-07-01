import { userParser } from "../storage/csvParser.js";
import userModel from "../models/user.js"
export const getAllUsers = async () =>{
    const parsedUsers = await userParser();
    let users = [];
    parsedUsers.forEach(user => {
        const newUser = new userModel(user[0], user[1], user[2], user[3], user[4], user[5], user[6]);
        users.push(newUser);
    });
    
    return users;
}

getAllUsers()